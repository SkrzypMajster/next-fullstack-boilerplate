import prisma from '@/lib/db';
import { UserAccount, UserCredentials } from '@/types/users';
import { comparePasswords, generatePasswordHash } from '@/utils/crypto';

class UserAuthRepository {
  private async findUserCredentialsByEmail(email: string): Promise<Nullable<UserCredentials>> {
    return prisma.userAuth.findUnique({
      where: { email },
      select: {
        email: true,
        password: true,
      },
    });
  }

  async findUserAccountByEmail(email: string): Promise<Nullable<UserAccount>> {
    return prisma.userAuth.findUnique({
      where: { email },
      select: {
        email: true,
        role: true,
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });
  }

  async findUserByCredentials(email: string, password: string): Promise<Nullable<UserAccount>> {
    const userCredentials = await this.findUserCredentialsByEmail(email);

    if (!userCredentials) {
      return null;
    }

    const isPasswordValid = await comparePasswords(password, userCredentials.password);

    if (!isPasswordValid) {
      return null;
    }

    return this.findUserAccountByEmail(email);
  }

  async registerUser(email: string, password: string, name: string) {
    const hashedPassword = await generatePasswordHash(password);

    const insertResult = await prisma.userAuth.create({
      data: {
        email,
        password: hashedPassword,
        user: {
          create: { name },
        },
      },
    });

    return insertResult;
  }
}

export const userAuthRepository = new UserAuthRepository();

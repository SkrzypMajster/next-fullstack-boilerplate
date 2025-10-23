import prisma from '@/lib/db';
import { comparePasswords, generatePasswordHash } from '@/utils/crypto';

class UserAuthRepository {
  async findUserByEmail(email: string) {
    return prisma.userAuth.findUnique({
      where: {
        email: email,
      },
      select: {
        email: true,
        password: true,
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

  async findUserByCredentials(email: string, password: string) {
    const user = await this.findUserByEmail(email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return user;
  }

  async registerUser(email: string, password: string, { name }: { name: string }) {
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

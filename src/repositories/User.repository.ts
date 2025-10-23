import prisma from '@/lib/db';
import { User } from '@/types/users';

class UserRepository {
  async findMeasurements(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findUserById(id: string): Promise<Nullable<User>> {
    return prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        image: true,
      },
    });
  }
}

export const userRepository = new UserRepository();

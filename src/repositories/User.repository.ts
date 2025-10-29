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

  async updateUserData(id: string, data: { name: string; image: Nullable<string> }) {
    return prisma.user.update({
      where: { id },
      data: {
        name: data.name,
        image: data.image,
      },
    });
  }
}

export const userRepository = new UserRepository();

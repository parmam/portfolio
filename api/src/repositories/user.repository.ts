import { PrismaClient, Role, User } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
    async createUser(data:User) {
        return await prisma.user.create({
          data,
        });
      }

  async getUserById(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async updateUser(id: number, data: User) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }

  async getUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  async getUserByPhone(phone: string) {
    return await prisma.user.findUnique({
      where: { phone },
    });
  }
  
}

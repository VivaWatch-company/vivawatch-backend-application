import { IRepository } from '@app/core/commons/IRepository';
import { PrismaService } from '@app/core/prisma/prisma.service';
import { User } from '@prisma/client';

export class UserCoreRepository implements IRepository<User> {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserData: User): Promise<User> {
    return this.prismaService.user.create({
      data: {
        name: createUserData.name,
        email: createUserData.email,
        password: createUserData.password,
        role: createUserData.role,
        document: createUserData.document,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: { id },
    });
  }
}

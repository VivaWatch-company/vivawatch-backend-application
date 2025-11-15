import { Injectable, NotFoundException } from '@nestjs/common';
import { UserCoreRepository } from './user-repository/user-repository';
import { User } from '@prisma/client';

@Injectable()
export class UsersCoreService {
  constructor(private readonly userCoreRepository: UserCoreRepository) {}

  async create(createUser: User): Promise<User> {
    return await this.userCoreRepository.create(createUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userCoreRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userCoreRepository.findById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUser: Partial<User>): Promise<User> {
    await this.findOne(id);
    return await this.userCoreRepository.update(id, updateUser);
  }

  async delete(id: string): Promise<void> {
    await this.findOne(id);
    return await this.userCoreRepository.delete(id);
  }
}

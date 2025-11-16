import { PrismaService } from '@app/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserClientDto } from './dto/create-user-client.dto';

@Injectable()
export class UserClientService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createClientDto: CreateUserClientDto) {
    return await this.prismaService.user.create({
      data: {
        ...createClientDto,
        role: 'ADMIN',
      },
    });
  }
}

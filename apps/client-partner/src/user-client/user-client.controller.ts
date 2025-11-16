import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserClientDto } from './dto/create-user-client.dto';
import { UserRole } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from '@app/core/users/entity/user.entity';
import { UserClientService } from './user-client.service';

@Controller('user-client')
export class UserClientController {
  constructor(private readonly userClientService: UserClientService) {}

  @Post()
  create(@Body() dto: CreateUserClientDto) {
    const data = plainToInstance(UserEntity, {
      ...dto,
      role: UserRole.ADMIN,
    });
    return this.userClientService.create(data);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateUserClientDto } from './dto/create-user-client.dto';
import { UpdateUserClientDto } from './dto/update-user-client.dto';
import { UsersCoreService } from '@app/core/users/users-core.service';
import { User } from '@prisma/client';

@Controller('user-client')
export class UserClientController {
  constructor(private readonly userClientService: UsersCoreService) {}

  @Post()
  create(@Body() createUserClientDto: CreateUserClientDto) {
    return this.userClientService.create(createUserClientDto as User);
  }

  @Get()
  findAll() {
    return this.userClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userClientService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserClientDto: UpdateUserClientDto,
  ) {
    return this.userClientService.update(id, updateUserClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userClientService.delete(id);
  }
}

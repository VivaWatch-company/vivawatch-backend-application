import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserClientDto } from './dto/create-user-client.dto';
import { UserClientService } from './user-client.service';

@Controller('user-client')
export class UserClientController {
  constructor(private readonly userClientService: UserClientService) {}

  @Post()
  create(@Body() dto: CreateUserClientDto) {
    return this.userClientService.create(dto);
  }
}

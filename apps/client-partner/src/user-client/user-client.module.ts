import { Module } from '@nestjs/common';
import { UserClientService } from './user-client.service';
import { UserClientController } from './user-client.controller';

@Module({
  controllers: [UserClientController],
  providers: [UserClientService],
})
export class UserClientModule {}

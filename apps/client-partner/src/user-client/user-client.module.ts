import { Module } from '@nestjs/common';
import { UserClientController } from './user-client.controller';
import { UsersCoreModule } from '@app/core';

@Module({
  imports: [UsersCoreModule],
  controllers: [UserClientController],
  providers: [],
})
export class UserClientModule {}

import { Module } from '@nestjs/common';
import { UserClientController } from './user-client.controller';
import { UsersCoreModule } from '@app/core';
import { UserClientService } from './user-client.service';
import { PrismaService } from '@app/core/prisma/prisma.service';

@Module({
  imports: [UsersCoreModule],
  controllers: [UserClientController],
  providers: [UserClientService, PrismaService],
})
export class UserClientModule {}

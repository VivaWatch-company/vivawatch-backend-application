import { Module } from '@nestjs/common';
import { UsersCoreService } from './users-core.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserCoreRepository } from './user-repository/user-repository';

@Module({
  providers: [UsersCoreService, PrismaService, UserCoreRepository],
})
export class UsersCoreModule {}

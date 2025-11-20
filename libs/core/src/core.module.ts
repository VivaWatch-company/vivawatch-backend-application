import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResendModule } from './resend/resend.module';
import { UsersCoreModule } from './users/users-core.module';

@Module({
  providers: [CoreService],
  exports: [CoreService],
  imports: [PrismaModule, ResendModule, UsersCoreModule],
})
export class CoreModule {}

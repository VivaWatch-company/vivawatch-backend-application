import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResendModule } from './resend/resend.module';
import { UsersModule } from './users/users-core.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  providers: [CoreService],
  exports: [CoreService],
  imports: [PrismaModule, ResendModule, UsersModule, SubscriptionModule],
})
export class CoreModule {}

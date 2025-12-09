import { PlanService } from '@app/core/plans/plan.service';
import { PlanRepository } from '@app/core/plans/repository/plan.repository';
import { PrismaService } from '@app/core/prisma/prisma.service';
import { UserCoreRepository } from '@app/core/users/user-repository/user-repository';
import { UsersCoreService } from '@app/core/users/users-core.service';
import { Module } from '@nestjs/common';
import { SubscriptionRepository } from '../subscriptions/repository/subscription.repository';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  imports: [],
  controllers: [StripeController],
  providers: [
    StripeService,
    SubscriptionsService,
    SubscriptionRepository,
    UsersCoreService,
    PlanService,
    PrismaService,
    UserCoreRepository,
    PlanRepository,
  ],
})
export class StripeModule {}

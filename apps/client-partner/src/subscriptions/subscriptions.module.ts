import { UsersCoreModule } from '@app/core';
import { PlanService } from '@app/core/plans/plan.service';
import { PlanRepository } from '@app/core/plans/repository/plan.repository';
import { PrismaService } from '@app/core/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlanModule } from 'apps/moderator-partner/src/plan/plan.module';
import { StripeModule } from '../stripe/stripe.module';
import { StripeService } from '../stripe/stripe.service';
import { SubscriptionRepository } from './repository/subscription.repository';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';

@Module({
  imports: [ConfigModule.forRoot(), PlanModule, UsersCoreModule, StripeModule],
  controllers: [SubscriptionsController],
  providers: [
    SubscriptionsService,
    SubscriptionRepository,
    PlanService,
    StripeService,
    PrismaService,
    PlanRepository,
  ],
})
export class SubscriptionsModule {}

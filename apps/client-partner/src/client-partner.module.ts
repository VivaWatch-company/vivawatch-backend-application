import { PlanCoreModule, UsersCoreModule } from '@app/core';
import { PlanService } from '@app/core/plans/plan.service';
import { Module } from '@nestjs/common';
// import { SubscriptionClientModule } from './subscription-client/subscription-client.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { UserClientModule } from './user-client/user-client.module';

@Module({
  imports: [
    UserClientModule,
    PlanCoreModule,
    UsersCoreModule,
    SubscriptionsModule,
  ],
  providers: [PlanService],
})
export class ClientPartnerModule {}

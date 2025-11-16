import { Module } from '@nestjs/common';
import { ClientPartnerController } from './client-partner.controller';
import { PlanService } from '@app/core/plans/plan.service';
import { PlanCoreModule, UsersCoreModule } from '@app/core';
// import { SubscriptionClientModule } from './subscription-client/subscription-client.module';
import { UserClientModule } from './user-client/user-client.module';

@Module({
  imports: [UserClientModule, PlanCoreModule, UsersCoreModule],
  controllers: [ClientPartnerController],
  providers: [PlanService],
})
export class ClientPartnerModule {}

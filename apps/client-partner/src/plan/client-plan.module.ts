import { PlanService } from '@app/core/plans/plan.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ClientPlanModule],
  providers: [PlanService],
})
export class ClientPlanModule {}

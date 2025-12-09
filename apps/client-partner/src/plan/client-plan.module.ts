import { PlanCoreModule } from '@app/core';
import { PlanService } from '@app/core/plans/plan.service';
import { Module } from '@nestjs/common';
import { ClientPlanController } from './client-plan.controller';

@Module({
  imports: [PlanCoreModule],
  controllers: [ClientPlanController],
  providers: [PlanService],
})
export class ClientPlanModule {}

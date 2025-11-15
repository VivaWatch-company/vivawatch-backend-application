import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PlanCoreModule } from '@app/core';
import { PlanService } from '@app/core/plans/plan.service';

@Module({
  imports: [PlanCoreModule],
  controllers: [PlanController],
  providers: [PlanService],
})
export class PlanModule {}

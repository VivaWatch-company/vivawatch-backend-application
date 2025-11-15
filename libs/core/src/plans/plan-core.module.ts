import { Module } from '@nestjs/common';
import { PlanService } from './plan.service';
import { PlanRepository } from './repository/plan.repository';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PlanRepository, PrismaService, PlanService],
  exports: [PlanRepository, PlanService],
})
export class PlanCoreModule {}

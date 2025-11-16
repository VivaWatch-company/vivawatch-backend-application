import { PlanService } from '@app/core/plans/plan.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Plan } from '@prisma/client';

@Controller('plan-client')
export class ClientPlanController {
  constructor(private readonly planService: PlanService) {}
  @Get()
  async getPlans(): Promise<Plan[]> {
    return await this.planService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.planService.findOne(id);
  }
}

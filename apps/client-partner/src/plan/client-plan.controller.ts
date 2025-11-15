import { PlanService } from '@app/core/plans/plan.service';
import { Controller, Get } from '@nestjs/common';
import { Plan } from '@prisma/client';

@Controller('plan-client')
export class ClientPlanController {
  constructor(private readonly planService: PlanService) {}
  // assinar plano
  // listar todos os planos
  // buscar apenas um plano

  @Get()
  async getPlans(): Promise<Plan[]> {
    return await this.planService.findAll();
  }
}

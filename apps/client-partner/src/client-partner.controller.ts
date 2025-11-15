import { PlanService } from '@app/core/plans/plan.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('plan-client')
export class ClientPartnerController {
  constructor(private readonly clientPartnerService: PlanService) {}

  @Get()
  getHello() {
    return this.clientPartnerService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.clientPartnerService.findOne(id);
  }
}

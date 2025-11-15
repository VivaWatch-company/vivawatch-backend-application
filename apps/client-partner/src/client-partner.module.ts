import { Module } from '@nestjs/common';
import { ClientPartnerController } from './client-partner.controller';
import { PlanService } from '@app/core/plans/plan.service';
import { PlanCoreModule } from '@app/core';

@Module({
  imports: [PlanCoreModule],
  controllers: [ClientPartnerController],
  providers: [PlanService],
})
export class ClientPartnerModule {}

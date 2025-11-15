import { PlanInterval } from 'generated/prisma/enums';
import { PlanBenefitsDto } from './create-plan-benefits.dto';

export class CreatePlanDto {
  name: string;
  price: number;
  period: PlanInterval;
  isMain?: boolean;
  isActive: boolean;
  planBenefits: PlanBenefitsDto[];
}

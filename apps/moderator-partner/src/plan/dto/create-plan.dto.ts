import { PlanBenefitsDto } from './create-plan-benefits.dto';
import { PlanIntervalEnum } from '../enums/plan-interval.enum';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsEnum(PlanIntervalEnum)
  period: PlanIntervalEnum;

  @IsOptional()
  @IsBoolean()
  isMain?: boolean;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @ValidateNested({ each: true })
  planBenefits: PlanBenefitsDto[];
}

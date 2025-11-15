import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class PlanBenefitsDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsUUID()
  planId?: string;
}

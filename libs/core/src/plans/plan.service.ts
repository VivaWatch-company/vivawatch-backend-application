import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from 'apps/moderator-partner/src/plan/dto/create-plan.dto';
import { UpdatePlanDto } from 'apps/moderator-partner/src/plan/dto/update-plan.dto';
import { PlanRepository } from './repository/plan.repository';
import { Plan } from '@prisma/client';

@Injectable()
export class PlanService {
  constructor(private readonly planRepository: PlanRepository) {}
  create(createPlanDto: CreatePlanDto) {
    return this.planRepository.create(createPlanDto);
  }

  async findAll(): Promise<Plan[]> {
    return await this.planRepository.findAll();
  }

  findOne(id: string) {
    return this.planRepository.findById(id);
  }

  update(id: string, updatePlanDto: UpdatePlanDto) {
    return this.planRepository.update(id, updatePlanDto);
  }

  remove(id: string) {
    return this.planRepository.delete(id);
  }
}

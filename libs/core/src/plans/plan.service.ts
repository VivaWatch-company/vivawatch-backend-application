import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Plan } from '@prisma/client';
import { CreatePlanDto } from 'apps/moderator-partner/src/plan/dto/create-plan.dto';
import { UpdatePlanDto } from 'apps/moderator-partner/src/plan/dto/update-plan.dto';
import { PlanRepository } from './repository/plan.repository';

@Injectable()
export class PlanService {
  constructor(private readonly planRepository: PlanRepository) {}
  async create(createPlanDto: CreatePlanDto) {
    const { name } = createPlanDto;
    const doesPlanExists = await this.planRepository.findByName(name);
    if (doesPlanExists) {
      throw new ConflictException('Plan already exists');
    }
    return this.planRepository.create(createPlanDto);
  }

  async findAll(): Promise<Plan[]> {
    return await this.planRepository.findAll();
  }

  async findOne(id: string) {
    const planExists = await this.planRepository.findById(id);

    if (!planExists) {
      throw new NotFoundException('plan was not found');
    }

    return planExists;
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    await this.findOne(id);
    const { name } = updatePlanDto;
    if (name) {
      const planNameInUse = await this.planRepository.findByName(name);
      if (planNameInUse) {
        throw new ConflictException('Plan already in use');
      }
    }
    return await this.planRepository.update(id, updatePlanDto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return await this.planRepository.delete(id);
  }
}

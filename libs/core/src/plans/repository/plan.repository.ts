import { IRepository } from '@app/core/commons/IRepository';
import { PrismaService } from '@app/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Plan } from '@prisma/client';
import { CreatePlanDto } from 'apps/moderator-partner/src/plan/dto/create-plan.dto';
import { UpdatePlanDto } from 'apps/moderator-partner/src/plan/dto/update-plan.dto';

@Injectable()
export class PlanRepository implements IRepository<Plan> {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreatePlanDto): Promise<Plan> {
    return await this.prismaService.plan.create({
      data: {
        name: data.name,
        price: data.price,
        period: data.period,
        isMain: data.isMain ?? false,
        isActive: data.isActive,
        planBenefits: data.planBenefits
          ? {
              createMany: {
                data: data.planBenefits.map((b) => ({
                  title: b.title,
                  description: b.description,
                })),
              },
            }
          : undefined,
      },
      include: {
        planBenefits: true,
      },
    });
  }

  async findAll(): Promise<Plan[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.prismaService.plan.findMany({
      include: { planBenefits: true },
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  async findById(id: string): Promise<Plan | null> {
    return await this.prismaService.plan.findUnique({
      where: { id },
      include: { planBenefits: true },
    });
  }

  async update(id: string, data: UpdatePlanDto): Promise<Plan> {
    return await this.prismaService.plan.update({
      where: { id },
      data: {
        name: data.name,
        price: data.price,
        period: data.period,
        isMain: data.isMain,
        isActive: data.isActive,
        ...(data.planBenefits && {
          planBenefits: {
            deleteMany: {},
            createMany: {
              data: data.planBenefits.map((b) => ({
                title: b.title,
                description: b.description,
              })),
            },
          },
        }),
      },
      include: {
        planBenefits: true,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.plan.delete({
      where: { id },
    });
  }
}

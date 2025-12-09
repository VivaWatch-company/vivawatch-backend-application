import { PrismaService } from '@app/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { SubscriptionPaymentStatus } from '@prisma/client';
import { CreateSubscriptionPaymentDto } from '../dto/create-subscription-payment.dto';

@Injectable()
export class SubscriptionPaymentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createSubscriptionPayment(
    createSubscriptionPaymentDto: CreateSubscriptionPaymentDto,
  ) {
    return this.prismaService.subscriptionPayment.create({
      data: createSubscriptionPaymentDto,
    });
  }

  async updateSubscriptionPaymentStatus(
    id: string,
    status: SubscriptionPaymentStatus,
  ) {
    return await this.prismaService.subscriptionPayment.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }
}

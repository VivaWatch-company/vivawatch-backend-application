import { PrismaService } from '@app/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { SubscriptionPaymentStatus } from '@prisma/client';

@Injectable()
export class SubscriptionPaymentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createSubscriptionPayment() {}

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

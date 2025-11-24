import { PrismaService } from '@app/core/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { SubscriptionPaymentRepository } from './repository/subscription-payment.repository';
import { SubscriptionPaymentService } from './subscription-payment.service';

@Module({
  providers: [
    SubscriptionPaymentService,
    SubscriptionPaymentRepository,
    PrismaService,
  ],
})
export class SubscriptionPaymentModule {}

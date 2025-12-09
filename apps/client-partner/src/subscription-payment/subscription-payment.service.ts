import { Injectable } from '@nestjs/common';
import { SubscriptionPaymentRepository } from './repository/subscription-payment.repository';

@Injectable()
export class SubscriptionPaymentService {
  constructor(
    private readonly subscriptionPaymentRepository: SubscriptionPaymentRepository,
  ) {}

  createSubscriptionPayment() {
    // se a subscription realmente existe
    //
  }
}

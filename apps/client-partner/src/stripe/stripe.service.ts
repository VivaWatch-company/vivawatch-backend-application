import {
  BadRequestException,
  Injectable,
  RawBodyRequest,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import Stripe from 'stripe';
import { PaymentMethod } from '../subscriptions/enums/payment-method.enum';
import { PaymentIntentDto } from './dto/payment-intent.dto';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(
      String(configService.get<string>('STRIPE_SECRET_KEY')),
      {
        apiVersion: '2025-11-17.clover',
      },
    );
  }

  constructStripeEvent(req: RawBodyRequest<Request>, signature: string) {
    try {
      const event = this.stripe.webhooks.constructEvent(
        req.body,
        signature,
        String(this.configService.get('ENDPOINT_SECRET')),
      );
      return event;
    } catch (err) {
      console.error('Webhook failed', err);
      throw new BadRequestException('Invalid signature');
    }
  }

  createPaymentIntent(data: PaymentIntentDto) {
    let paymentObject: any;
    if (data.paymentMethod == PaymentMethod.CARD) {
      paymentObject = {};
    } else if (data.paymentMethod == PaymentMethod.PIX) {
      paymentObject = {
        expires_at: 2 * 60 * 60 * 1000,
      };
    }

    try {
      this.stripe.paymentIntents.create({
        amount: data.amount,
        payment_method_types: [`${data.paymentMethod}`],
        payment_method_options: paymentObject,
        currency: 'brl',
      });
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}

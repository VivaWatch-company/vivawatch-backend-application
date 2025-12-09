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

  handlePaymentWebhook(req: RawBodyRequest<Request>, signature: string) {
    console.log(Buffer.isBuffer(req.body));
    const event = this.constructStripeEvent(req, signature);
    switch (event.type) {
      case 'payment_intent.succeeded': {
        console.log('Caiu aqui');
        break;
      }
      case 'payment_method.attached': {
        const paymentMethod = event.data.object;
        console.log(paymentMethod);
        console.log('PaymentMethod was attached to a Customer!');
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
  }

  private constructStripeEvent(
    req: RawBodyRequest<Request>,
    signature: string,
  ) {
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

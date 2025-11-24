import type { RawBodyRequest } from '@nestjs/common';
import {
  Controller,
  Header,
  Headers,
  Post,
  Request as Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly subscriptionService: SubscriptionsService,
  ) {}

  @Post('webhook')
  @Header('Content-Type', 'application/json')
  getStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    console.log(Buffer.isBuffer(req.body));
    const event = this.stripeService.constructStripeEvent(req, signature);
    switch (event.type) {
      case 'payment_intent.succeeded': {
        console.log('Caiu aqui');
        const paymentIntent = event.data.object;
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
}

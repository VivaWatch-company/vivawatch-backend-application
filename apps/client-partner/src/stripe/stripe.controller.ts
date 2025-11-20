import type { RawBodyRequest } from '@nestjs/common';
import { Controller, Headers, Post, Request as Req } from '@nestjs/common';
import type { Request } from 'express';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('webhook')
  getStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    const event = this.stripeService.constructStripeEvent(
      req.rawBody as Buffer,
      signature,
    );
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log(paymentIntent);
        console.log('PaymentIntent was successful!');
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

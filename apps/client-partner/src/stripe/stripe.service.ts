import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private readonly stripe: Stripe;
  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(
      configService.get<string>('STRIPE_SECRET_KEY') as string,
      {
        apiVersion: '2025-11-17.clover',
      },
    );
  }

  constructStripeEvent(req: Buffer, signature: string) {
    try {
      const event = this.stripe.webhooks.constructEvent(
        req,
        signature,
        this.configService.get('STRIPE_WEBHOOK_SECRET') as string,
      );
      return event;
    } catch (err) {
      console.error('Webhook failed', err);
      throw new BadRequestException('Invalid signature');
    }
  }

  createPaymentIntent() {}
}

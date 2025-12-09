import type { RawBodyRequest } from '@nestjs/common';
import {
  Controller,
  Header,
  Headers,
  Post,
  Request as Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('webhook')
  @Header('Content-Type', 'application/json')
  getStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    @Headers('stripe-signature') signature: string,
  ) {
    return this.stripeService.handlePaymentWebhook(req, signature);
  }
}

import { Module } from '@nestjs/common';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  controllers: [StripeController],
  providers: [StripeService, SubscriptionsService],
})
export class StripeModule {}

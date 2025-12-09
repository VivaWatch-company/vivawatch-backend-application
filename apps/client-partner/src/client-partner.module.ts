import { PlanCoreModule, UsersCoreModule } from '@app/core';
import { Module } from '@nestjs/common';
// import { SubscriptionClientModule } from './subscription-client/subscription-client.module';
import { ConfigModule } from '@nestjs/config';
import { ClientPlanModule } from './plan/client-plan.module';
import { StripeModule } from './stripe/stripe.module';
import { SubscriptionPaymentModule } from './subscription-payment/subscription-payment.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { UserClientModule } from './user-client/user-client.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../../.env',
      isGlobal: true,
    }),
    UserClientModule,
    PlanCoreModule,
    UsersCoreModule,
    SubscriptionsModule,
    StripeModule,
    SubscriptionPaymentModule,
    ClientPlanModule,
  ],
})
export class ClientPartnerModule {}

import { Module } from '@nestjs/common';
import { SubscriptionClientService } from './subscription-client.service';
import { SubscriptionClientController } from './subscription-client.controller';

@Module({
  controllers: [SubscriptionClientController],
  providers: [SubscriptionClientService],
})
export class SubscriptionClientModule {}

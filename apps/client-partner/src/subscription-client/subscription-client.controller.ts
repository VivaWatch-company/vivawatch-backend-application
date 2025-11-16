import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionClientService } from './subscription-client.service';
import { CreateSubscriptionClientDto } from './dto/create-subscription-client.dto';

@Controller('subscription-client')
export class SubscriptionClientController {
  constructor(
    private readonly subscriptionClientService: SubscriptionClientService,
  ) {}

  @Post()
  create(@Body() createSubscriptionClientDto: CreateSubscriptionClientDto) {
    return this.subscriptionClientService.create(createSubscriptionClientDto);
  }
}

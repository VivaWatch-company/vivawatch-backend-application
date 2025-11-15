import { Injectable } from '@nestjs/common';
import { CreateSubscriptionClientDto } from './dto/create-subscription-client.dto';
import { UpdateSubscriptionClientDto } from './dto/update-subscription-client.dto';

@Injectable()
export class SubscriptionClientService {
  create(createSubscriptionClientDto: CreateSubscriptionClientDto) {
    return 'This action adds a new subscriptionClient';
  }

  findAll() {
    return `This action returns all subscriptionClient`;
  }

  findOne(id: string) {
    return `This action returns a #${id} subscriptionClient`;
  }

  update(id: string, updateSubscriptionClientDto: UpdateSubscriptionClientDto) {
    return `This action updates a #${id} subscriptionClient`;
  }

  remove(id: string) {
    return `This action removes a #${id} subscriptionClient`;
  }
}

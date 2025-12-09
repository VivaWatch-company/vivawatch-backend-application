import { PlanService } from '@app/core/plans/plan.service';
import { UsersCoreService } from '@app/core/users/users-core.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionRepository } from './repository/subscription.repository';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly userService: UsersCoreService,
    private readonly planService: PlanService,
  ) {}
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const { userId, planId } = createSubscriptionDto;
    const userExists = await this.userService.findOne(userId);
    const planExists = await this.planService.findOne(planId);

    if (!userExists) {
      throw new NotFoundException('User was not found');
    }

    if (!planExists) {
      throw new NotFoundException('Plan was not found');
    }

    // const payload = this.buildPaymentPayload(paymentMethod);
    // return payload;

    // se o método de pagamento for pix

    // criar uma subscription
    setTimeout(() => {
      // request para rota de simulação de webhook
      // enviar os dados necessários do cliente para simularmos a subscription
    }, 3000);
  }

  findOne(id: string) {
    return this.subscriptionRepository.findOne(id);
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return {
      id,
      updateSubscriptionDto,
    };
  }

  // private buildPaymentPayload(paymentMethod: PaymentMethod) {
  //   let paymentIntentObject;
  //   return paymentMethod;
  // }
}

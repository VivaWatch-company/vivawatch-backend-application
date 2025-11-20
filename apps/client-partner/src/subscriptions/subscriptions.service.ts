import { PlanService } from '@app/core/plans/plan.service';
import { UsersCoreService } from '@app/core/users/users-core.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { PaymentMethod } from './enums/payment-method.enum';
import { SubscriptionRepository } from './repository/subscription.repository';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
    private readonly userService: UsersCoreService,
    private readonly planService: PlanService,
  ) {}
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    const { userId, planId, paymentMethod } = createSubscriptionDto;
    const userExists = await this.userService.findOne(userId);
    const planExists = await this.planService.findOne(planId);
    if (!userExists) {
      throw new NotFoundException('User was not found');
    }
    if (!planExists) {
      throw new NotFoundException('Plan was not found');
    }

    // criar subscription - > com status de criado
    // criar subscription payment -> com status de pending ou algo que remeta a esperando pagamento
    // ao gerar pagamento a gente gera a cobranaça para o user pagar e esperamos o tempo de pagamento(caso seja pix a subscription payment é criado)
    // caso o método de pagamento seja cartão de crédito esperamos o webhook confirmar para criar tudo!
    // criar com o tempo de expiração

    const payload = this.buildPaymentPayload(paymentMethod);
    return payload;
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

  private buildPaymentPayload(paymentMethod: PaymentMethod) {
    return paymentMethod;
  }
}

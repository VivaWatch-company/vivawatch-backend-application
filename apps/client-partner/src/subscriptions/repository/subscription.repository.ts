import { PrismaService } from '@app/core/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { SubscriptionPayload } from '../payload/subscription.payload';

@Injectable()
export class SubscriptionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createSubscription(createSubscriptionPayload: SubscriptionPayload) {
    return this.prismaService.subscription.create({
      data: {
        ...createSubscriptionPayload,
        startAt: new Date(), // quando o plano inicia(no caso no momento em que o pagamento é aprovado pelo banco)
        endAt: new Date(), // quando o plano acaba
        renewAt: new Date(), // data de renovação da subscription(o sistema gera um novo pagamento para o cliente pagar)
        trialEndsAt: new Date(), // tempo de tentativa esperado, caso o pagamento seja pix(caso o pagamento seja cartão a regra precisa ser outra)
      },
    });
  }

  async findOne(id: string) {
    return await this.prismaService.subscription.findUnique({
      where: {
        id,
      },
    });
  }

  rejectSubscription() {
    // caso o webhook envie alguma falha, devemos atualizar o status da subscription e o status do payment, caso ele tenha sido criado
  }

  cancelSubscription() {
    // o cliente solicitou o cancelamento da assinatura, a assinatura entra em uma fila de processamento para que não tenha golpes
    // verificação de quantos meses faltam, para que o pagamento de uma possível multa seja aplicada
    // precisamos calcular qual será a multa desse cliente
  }

  deactivateSubscription() {
    // contas podem ser desativadas caso o pagamento da conta não seja feito
    // constas podem ser desativadas por admins caso o cliente tenha cometido algo de errado no sistema ou juridicamente
  }
}

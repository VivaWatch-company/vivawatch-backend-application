import { $Enums, PrismaClient } from '@prisma/client';

export async function PlanSeeder(prismaClient: PrismaClient) {
  const plans: any[] = [
    {
      name: 'Essencial',
      price: 8.98,
      period: $Enums.PlanInterval.MONTHLY,
      isActive: true,
      planBenefits: [
        {
          title: 'Dashboard básico',
          description:
            'Visualize informações essenciais de forma simples e direta.',
        },
        {
          title: 'Notificações básicas',
          description: 'Receba alertas importantes sem complexidade.',
        },
        {
          title: 'Atualizações regulares',
          description: 'Fique sempre atualizado sobre o status da sua conta.',
        },
        {
          title: '1 dispositivo',
          description:
            'Utilize sua conta em um único dispositivo simultaneamente.',
        },
        {
          title: 'Histórico de 7 dias',
          description:
            'Acompanhe seus dados dos últimos sete dias com facilidade.',
        },
      ],
    },
    {
      name: 'Avançado',
      price: 28.79,
      period: $Enums.PlanInterval.MONTHLY,
      isActive: true,
      planBenefits: [
        {
          title: 'Dashboard completo',
          description:
            'Acompanhe métricas detalhadas com visualizações avançadas.',
        },
        {
          title: 'Dados em tempo real',
          description: 'Receba atualizações instantâneas sem atrasos.',
        },
        {
          title: 'Até 3 dispositivos',
          description:
            'Utilize sua conta em até três dispositivos simultaneamente.',
        },
        {
          title: 'Histórico ilimitado',
          description: 'Acesse todos os dados registrados desde o início.',
        },
        {
          title: 'Suporte prioritário',
          description: 'Receba atendimento mais rápido e eficiente.',
        },
      ],
    },
    {
      name: 'Profissional',
      price: 58.97,
      period: $Enums.PlanInterval.MONTHLY,
      isMain: true,
      isActive: true,
      planBenefits: [
        {
          title: 'Multi-usuário',
          description: 'Adicione e gerencie múltiplos usuários na mesma conta.',
        },
        {
          title: 'Dispositivos ilimitados',
          description: 'Conecte quantos dispositivos forem necessários.',
        },
        {
          title: 'Relatórios avançados',
          description:
            'Gere relatórios completos com filtros e análises detalhadas.',
        },
        {
          title: 'Alertas por WhatsApp',
          description: 'Receba notificações diretamente no seu WhatsApp.',
        },
        {
          title: 'API de integração',
          description:
            'Integre facilmente com sistemas externos ou aplicações próprias.',
        },
        {
          title: 'Suporte 24/7',
          description:
            'Tenha atendimento disponível a qualquer hora, todos os dias.',
        },
      ],
    },
  ];

  try {
    for (const plan of plans) {
      const { planBenefits, ...rest } = plan;
      const planExists = await prismaClient.plan.findUnique({
        where: {
          name: plan.name,
        },
      });

      if (!planExists) {
        await prismaClient.plan.create({
          data: {
            ...rest,
            planBenefits: {
              create: planBenefits.map((benefit) => ({
                title: benefit.title,
                description: benefit.description,
              })),
            },
          },
        });
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
}

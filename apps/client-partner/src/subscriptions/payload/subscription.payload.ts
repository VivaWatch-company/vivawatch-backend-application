import { SubscriptionStatus } from '@prisma/client';

export class SubscriptionPayload {
  userId: string;
  planId: string;
  status: SubscriptionStatus;
}

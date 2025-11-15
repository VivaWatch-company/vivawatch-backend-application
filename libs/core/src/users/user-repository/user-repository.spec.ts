import { PrismaService } from '@app/core/prisma/prisma.service';
import { UserCoreRepository } from './user-repository';

describe('UserRepository', () => {
  it('should be defined', () => {
    expect(new UserCoreRepository(new PrismaService())).toBeDefined();
  });
});

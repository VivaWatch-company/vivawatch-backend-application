import { Test, TestingModule } from '@nestjs/testing';
import { UsersCoreService } from './users-core.service';

describe('UsersService', () => {
  let service: UsersCoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersCoreService],
    }).compile();

    service = module.get<UsersCoreService>(UsersCoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { SubscriptionClientController } from './subscription-client.controller';
import { SubscriptionClientService } from './subscription-client.service';

describe('SubscriptionClientController', () => {
  let controller: SubscriptionClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscriptionClientController],
      providers: [SubscriptionClientService],
    }).compile();

    controller = module.get<SubscriptionClientController>(SubscriptionClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

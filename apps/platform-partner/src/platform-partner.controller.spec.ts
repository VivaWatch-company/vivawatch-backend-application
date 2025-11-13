import { Test, TestingModule } from '@nestjs/testing';
import { PlatformPartnerController } from './platform-partner.controller';
import { PlatformPartnerService } from './platform-partner.service';

describe('PlatformPartnerController', () => {
  let platformPartnerController: PlatformPartnerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlatformPartnerController],
      providers: [PlatformPartnerService],
    }).compile();

    platformPartnerController = app.get<PlatformPartnerController>(PlatformPartnerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(platformPartnerController.getHello()).toBe('Hello World!');
    });
  });
});

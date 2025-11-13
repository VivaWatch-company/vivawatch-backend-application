import { Test, TestingModule } from '@nestjs/testing';
import { ClientPartnerController } from './client-partner.controller';
import { ClientPartnerService } from './client-partner.service';

describe('ClientPartnerController', () => {
  let clientPartnerController: ClientPartnerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientPartnerController],
      providers: [ClientPartnerService],
    }).compile();

    clientPartnerController = app.get<ClientPartnerController>(ClientPartnerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientPartnerController.getHello()).toBe('Hello World!');
    });
  });
});

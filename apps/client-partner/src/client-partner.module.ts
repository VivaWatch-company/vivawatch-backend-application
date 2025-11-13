import { Module } from '@nestjs/common';
import { ClientPartnerController } from './client-partner.controller';
import { ClientPartnerService } from './client-partner.service';

@Module({
  imports: [],
  controllers: [ClientPartnerController],
  providers: [ClientPartnerService],
})
export class ClientPartnerModule {}

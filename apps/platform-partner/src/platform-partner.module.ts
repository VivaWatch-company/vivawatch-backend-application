import { Module } from '@nestjs/common';
import { PlatformPartnerController } from './platform-partner.controller';
import { PlatformPartnerService } from './platform-partner.service';

@Module({
  imports: [],
  controllers: [PlatformPartnerController],
  providers: [PlatformPartnerService],
})
export class PlatformPartnerModule {}

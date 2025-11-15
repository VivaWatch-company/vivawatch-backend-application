import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { PrismaModule } from './prisma/prisma.module';
import { ResendModule } from './resend/resend.module';

@Module({
  providers: [CoreService],
  exports: [CoreService],
  imports: [PrismaModule, ResendModule],
})
export class CoreModule {}

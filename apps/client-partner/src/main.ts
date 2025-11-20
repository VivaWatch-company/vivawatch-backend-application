import { NestFactory } from '@nestjs/core';
import { raw } from 'express';
import { ClientPartnerModule } from './client-partner.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientPartnerModule);
  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });
  app.use('/stripe/webhook', raw({ type: 'application/json' }));
  await app.listen(process.env.CLIENTPARTNERPORT ?? 3002);
}
bootstrap();

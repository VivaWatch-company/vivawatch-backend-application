import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { json, raw } from 'express';
import { ClientPartnerModule } from './client-partner.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    ClientPartnerModule,
    {
      bodyParser: true,
      rawBody: true,
    },
  );
  app.enableCors({
    origin: ['*'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.use((req, res, next) => {
    if (req.originalUrl === '/stripe/webhook') {
      next();
    } else {
      json()(req, res, next);
    }
  });

  app.use('/stripe/webhook', raw({ type: 'application/json' }));
  app.use(json());
  await app.listen(process.env.CLIENTPARTNERPORT ?? 3002, '0.0.0.0');
}
bootstrap();

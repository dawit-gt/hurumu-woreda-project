import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

let app: any;

async function getApp() {
  if (!app) {
    app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });

    app.enableCors({
      origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
      credentials: true,
    });

    app.setGlobalPrefix(process.env.API_PREFIX ?? 'api/v1');

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
      }),
    );

    await app.init();
  }
  return app;
}

export default async function handler(req: any, res: any) {
  const app = await getApp();
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp(req, res);
}

// Local development
if (process.env.NODE_ENV !== 'production') {
  getApp().then(app => {
    app.listen(process.env.PORT ?? 3001, '0.0.0.0');
    console.log(`\n🟢  Hurumu Woreda API → http://localhost:${process.env.PORT ?? 3001}`);
  });
}
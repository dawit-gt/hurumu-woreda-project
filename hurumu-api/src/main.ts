import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    logger: ['error', 'warn', 'log'] 
  });

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? '*',
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

  // Safely parse port to integer and fall back if empty/undefined
  const port = parseInt(process.env.PORT || '3001', 10);
  
  await app.listen(port, '0.0.0.0');
  console.log(`🟢 Hurumu Woreda API is running on port: ${port}`);
}

bootstrap();
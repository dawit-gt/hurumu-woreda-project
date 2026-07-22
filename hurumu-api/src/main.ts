import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const helmet = require('helmet');
  const compression = require('compression');
  app.use(typeof helmet === 'function' ? helmet() : helmet.default());
  app.use(typeof compression === 'function' ? compression() : compression.default());

  app.enableCors({
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  app.setGlobalPrefix(process.env.API_PREFIX ?? 'api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Hurumu Woreda Administration API')
    .setDescription('Enterprise government portal — Oromia Region, Ethiopia')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Auth').addTag('Users').addTag('News')
    .addTag('Departments').addTag('Services')
    .addTag('Documents').addTag('Kebeles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port, '0.0.0.0');
  console.log(`\n🟢  Hurumu Woreda API → http://localhost:${port}`);
  console.log(`📚  Swagger docs    → http://localhost:${port}/api/docs\n`);
}
bootstrap();
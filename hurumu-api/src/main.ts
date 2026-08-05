import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { 
    logger: ['error', 'warn', 'log'] 
  });

  const allowedOrigins = [
    'https://hurumu-woreda-project.vercel.app', // production
    'http://localhost:3000', // local dev
  ];

  app.enableCors({
    origin: (origin, callback) => {
      // allow non-browser requests (curl, server-to-server, no Origin header)
      if (!origin) return callback(null, true);

      const isAllowed =
        allowedOrigins.includes(origin) ||
        /^https:\/\/hurumu-woreda-project-[a-z0-9]+-dawatd111-4765s-projects\.vercel\.app$/.test(origin);

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
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

  const port = parseInt(process.env.PORT || '3001', 10);
  
  await app.listen(port, '0.0.0.0');
  console.log(`🟢 Hurumu Woreda API is running on port: ${port}`);
}

bootstrap();
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';

// PrismaClient is available after `npx prisma generate` is run.
// Until then we declare a minimal compatible type so the project builds.
let PrismaClientClass: any;
try {
  PrismaClientClass = require('@prisma/client').PrismaClient;
} catch {
  PrismaClientClass = class FallbackPrismaClient {
    async $connect() {}
    async $disconnect() {}
  };
}

@Injectable()
export class PrismaService extends PrismaClientClass implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  // Typed delegates — populated by PrismaClient after generate
  user!: any;
  refreshToken!: any;
  department!: any;
  kebele!: any;
  news!: any;
  newsTagRelation!: any;
  service!: any;
  serviceApplication!: any;
  document!: any;
  siteConfig!: any;
  auditLog!: any;

  constructor() {
    super({
      log: ['error', 'warn'],
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅  Database connected');
    } catch (err) {
      this.logger.warn('⚠️  Database not available — running without DB connection');
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async cleanDb() {
    if (process.env.NODE_ENV !== 'test') throw new Error('cleanDb() is only for test env');
    const models = ['auditLog','refreshToken','newsTagRelation','serviceApplication','document','news','service','user','kebele','department','siteConfig'];
    for (const m of models) await (this as any)[m]?.deleteMany?.();
  }
}

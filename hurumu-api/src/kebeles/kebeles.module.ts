import { Module } from '@nestjs/common';
import { KebelesService } from './kebeles.service';
import { KebelesController } from './kebeles.controller';
@Module({ controllers: [KebelesController], providers: [KebelesService] })
export class KebelesModule {}

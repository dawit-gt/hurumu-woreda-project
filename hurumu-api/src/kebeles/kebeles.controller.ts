import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { KebelesService } from './kebeles.service';
import { CreateKebeleDto } from './dto/create-kebele.dto';
import { UpdateKebeleDto } from './dto/update-kebele.dto';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@ApiTags('Kebeles')
@Controller('kebeles')
export class KebelesController {
  constructor(private readonly kebelesService: KebelesService) {}

  @Public() @Get() findAll() { return this.kebelesService.findAll(); }
  @Public() @Get(':id') findOne(@Param('id') id: string) { return this.kebelesService.findOne(id); }

  @Post() @ApiBearerAuth() @Roles('ADMIN', 'SUPER_ADMIN') @UseGuards(RolesGuard)
  create(@Body() dto: CreateKebeleDto) { return this.kebelesService.create(dto); }

  @Patch(':id') @ApiBearerAuth() @Roles('ADMIN', 'SUPER_ADMIN') @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() dto: UpdateKebeleDto) { return this.kebelesService.update(id, dto); }

  @Delete(':id') @ApiBearerAuth() @Roles('SUPER_ADMIN') @UseGuards(RolesGuard)
  remove(@Param('id') id: string) { return this.kebelesService.remove(id); }
}

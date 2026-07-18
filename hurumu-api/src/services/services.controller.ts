import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateApplicationDto } from './dto/create-application.dto';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ServiceCategory } from '../common/enums';

@ApiTags('Services')
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Public() @Get() @ApiQuery({ name: 'category', enum: ServiceCategory, required: false })
  findAll(@Query('category') category?: ServiceCategory) { return this.servicesService.findAll(category); }

  @Public() @Get('track/:ref')
  trackApplication(@Param('ref') ref: string) { return this.servicesService.trackApplication(ref); }

  @Public() @Get(':slug') findOne(@Param('slug') slug: string) { return this.servicesService.findBySlug(slug); }

  @Public() @Post(':id/apply')
  apply(@Param('id') id: string, @Body() dto: CreateApplicationDto) { return this.servicesService.submitApplication(id, dto); }

  @Post() @ApiBearerAuth() @Roles('ADMIN' as any, 'SUPER_ADMIN' as any) @UseGuards(RolesGuard)
  create(@Body() dto: CreateServiceDto) { return this.servicesService.create(dto); }

  @Patch(':id') @ApiBearerAuth() @Roles('ADMIN' as any, 'SUPER_ADMIN' as any) @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() dto: UpdateServiceDto) { return this.servicesService.update(id, dto); }

  @Delete(':id') @ApiBearerAuth() @Roles('SUPER_ADMIN' as any) @UseGuards(RolesGuard)
  remove(@Param('id') id: string) { return this.servicesService.remove(id); }
}

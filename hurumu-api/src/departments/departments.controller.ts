import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Public() @Get() findAll() { return this.departmentsService.findAll(); }
  @Public() @Get(':slug') findOne(@Param('slug') slug: string) { return this.departmentsService.findOne(slug); }

  @Post() @ApiBearerAuth() @Roles('ADMIN', 'SUPER_ADMIN') @UseGuards(RolesGuard)
  create(@Body() dto: CreateDepartmentDto) { return this.departmentsService.create(dto); }

  @Patch(':id') @ApiBearerAuth() @Roles('ADMIN', 'SUPER_ADMIN') @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() dto: UpdateDepartmentDto) { return this.departmentsService.update(id, dto); }

  @Delete(':id') @ApiBearerAuth() @Roles('SUPER_ADMIN') @UseGuards(RolesGuard)
  remove(@Param('id') id: string) { return this.departmentsService.remove(id); }
}

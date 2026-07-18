import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { DocumentType } from '../common/enums';

@ApiTags('Documents')
@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Public() @Get() findAll(@Query('type') type?: DocumentType, @Query('fiscalYear') fiscalYear?: string) { return this.documentsService.findAll(type, fiscalYear); }
  @Public() @Get(':id') findOne(@Param('id') id: string) { return this.documentsService.findOne(id); }

  @Post() @ApiBearerAuth() @Roles('ADMIN' as any, 'SUPER_ADMIN' as any, 'DEPARTMENT_HEAD' as any) @UseGuards(RolesGuard)
  create(@Body() dto: CreateDocumentDto, @CurrentUser('id') userId: string) { return this.documentsService.create(dto, userId); }

  @Patch(':id') @ApiBearerAuth() @Roles('ADMIN' as any, 'SUPER_ADMIN' as any) @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() dto: UpdateDocumentDto) { return this.documentsService.update(id, dto); }

  @Delete(':id') @ApiBearerAuth() @Roles('SUPER_ADMIN' as any) @UseGuards(RolesGuard)
  remove(@Param('id') id: string) { return this.documentsService.remove(id); }
}

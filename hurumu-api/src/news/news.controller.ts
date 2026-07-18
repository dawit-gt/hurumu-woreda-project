import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsQueryDto } from './dto/news-query.dto';
import { Public } from '../common/decorators/public.decorator';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';

@ApiTags('News')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List published news (public)' })
  findAll(@Query() query: NewsQueryDto) { return this.newsService.findAll(query); }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get news by slug (public)' })
  findOne(@Param('slug') slug: string) { return this.newsService.findBySlug(slug); }

  @Post()
  @ApiBearerAuth()
  @Roles('ADMIN', 'SUPER_ADMIN', 'DEPARTMENT_HEAD', 'STAFF')
  @UseGuards(RolesGuard)
  @ApiOperation({ summary: 'Create news item (staff+)' })
  create(@Body() dto: CreateNewsDto, @CurrentUser('id') userId: string) {
    return this.newsService.create(dto, userId);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @Roles('ADMIN', 'SUPER_ADMIN', 'DEPARTMENT_HEAD', 'STAFF')
  @UseGuards(RolesGuard)
  update(@Param('id') id: string, @Body() dto: UpdateNewsDto) {
    return this.newsService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @Roles('ADMIN', 'SUPER_ADMIN')
  @UseGuards(RolesGuard)
  remove(@Param('id') id: string) { return this.newsService.remove(id); }
}

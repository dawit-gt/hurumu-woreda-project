import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsQueryDto } from './dto/news-query.dto';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNewsDto, authorId: string) {
    return this.prisma.news.create({
      data: { ...dto, authorId, publishedAt: dto.status === 'PUBLISHED' ? new Date() : null },
      include: { author: { select: { id: true, fullName: true } }, department: true },
    });
  }

  async findAll(query: NewsQueryDto) {
    const page  = parseInt(query.page  ?? '1');
    const limit = parseInt(query.limit ?? '10');
    const skip  = (page - 1) * limit;

    const where: any = {};
    if (query.tag)          where.tag = query.tag;
    if (query.status)       where.status = query.status;
    if (query.isUrgent !== undefined) where.isUrgent = query.isUrgent;
    if (query.departmentId) where.departmentId = query.departmentId;
    if (query.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { excerpt: { contains: query.search, mode: 'insensitive' } },
      ];
    }

    const [items, total] = await Promise.all([
      this.prisma.news.findMany({
        where, skip, take: limit,
        orderBy: [{ isUrgent: 'desc' }, { publishedAt: 'desc' }, { createdAt: 'desc' }],
        include: { author: { select: { id: true, fullName: true } }, department: { select: { id: true, name: true } } },
      }),
      this.prisma.news.count({ where }),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async findBySlug(slug: string) {
    const item = await this.prisma.news.findUnique({
      where: { slug },
      include: { author: { select: { id: true, fullName: true } }, department: true },
    });
    if (!item) throw new NotFoundException(`News item "${slug}" not found`);
    await this.prisma.news.update({ where: { slug }, data: { viewCount: { increment: 1 } } });
    return item;
  }

  async update(id: string, dto: UpdateNewsDto) {
    await this.findById(id);
    const data: any = { ...dto };
    if (dto.status === 'PUBLISHED') data.publishedAt = new Date();
    return this.prisma.news.update({ where: { id }, data, include: { author: { select: { id: true, fullName: true } }, department: true } });
  }

  async remove(id: string) {
    await this.findById(id);
    return this.prisma.news.delete({ where: { id } });
  }

  private async findById(id: string) {
    const item = await this.prisma.news.findUnique({ where: { id } });
    if (!item) throw new NotFoundException(`News item "${id}" not found`);
    return item;
  }
}

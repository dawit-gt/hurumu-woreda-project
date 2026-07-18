import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentType } from '../common/enums';

@Injectable()
export class DocumentsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateDocumentDto, uploadedById: string) {
    return this.prisma.document.create({ data: { ...dto, uploadedById }, include: { department: { select: { id: true, name: true } }, uploadedBy: { select: { id: true, fullName: true } } } });
  }

  findAll(type?: DocumentType, fiscalYear?: string) {
    return this.prisma.document.findMany({
      where: { isPublic: true, ...(type && { type }), ...(fiscalYear && { fiscalYear }) },
      orderBy: { createdAt: 'desc' },
      include: { department: { select: { id: true, name: true } } },
    });
  }

  async findOne(id: string) {
    const doc = await this.prisma.document.findUnique({ where: { id }, include: { department: true, uploadedBy: { select: { id: true, fullName: true } } } });
    if (!doc) throw new NotFoundException(`Document "${id}" not found`);
    await this.prisma.document.update({ where: { id }, data: { downloadCount: { increment: 1 } } });
    return doc;
  }

  async update(id: string, dto: UpdateDocumentDto) {
    await this.ensureExists(id);
    return this.prisma.document.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.prisma.document.delete({ where: { id } });
  }

  private async ensureExists(id: string) {
    const doc = await this.prisma.document.findUnique({ where: { id } });
    if (!doc) throw new NotFoundException(`Document "${id}" not found`);
    return doc;
  }
}

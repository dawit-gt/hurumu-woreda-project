import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKebeleDto } from './dto/create-kebele.dto';
import { UpdateKebeleDto } from './dto/update-kebele.dto';

@Injectable()
export class KebelesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateKebeleDto) {
    const exists = await this.prisma.kebele.findUnique({ where: { number: dto.number } });
    if (exists) throw new ConflictException(`Kebele #${dto.number} already exists`);
    return this.prisma.kebele.create({ data: dto });
  }

  findAll() {
    return this.prisma.kebele.findMany({
      orderBy: { number: 'asc' },
      include: { _count: { select: { serviceApplications: true } } },
    });
  }

  async findOne(id: string) {
    const kebele = await this.prisma.kebele.findUnique({
      where: { id },
      include: { serviceApplications: { include: { service: { select: { name: true } } }, orderBy: { submittedAt: 'desc' }, take: 10 } },
    });
    if (!kebele) throw new NotFoundException(`Kebele "${id}" not found`);
    return kebele;
  }

  async update(id: string, dto: UpdateKebeleDto) {
    await this.ensureExists(id);
    return this.prisma.kebele.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.prisma.kebele.delete({ where: { id } });
  }

  private async ensureExists(id: string) {
    const k = await this.prisma.kebele.findUnique({ where: { id } });
    if (!k) throw new NotFoundException(`Kebele "${id}" not found`);
    return k;
  }
}

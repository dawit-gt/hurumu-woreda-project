import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateDepartmentDto) {
    const exists = await this.prisma.department.findUnique({ where: { slug: dto.slug } });
    if (exists) throw new ConflictException('Department slug already exists');
    return this.prisma.department.create({ data: dto });
  }

  findAll() {
    return this.prisma.department.findMany({ where: { isActive: true }, orderBy: { sortOrder: 'asc' }, include: { _count: { select: { users: true, services: true, news: true } } } });
  }

  async findOne(slug: string) {
    const dept = await this.prisma.department.findUnique({ where: { slug }, include: { services: { where: { isActive: true } }, users: { select: { id: true, fullName: true, role: true } } } });
    if (!dept) throw new NotFoundException(`Department "${slug}" not found`);
    return dept;
  }

  async update(id: string, dto: UpdateDepartmentDto) {
    await this.ensureExists(id);
    return this.prisma.department.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.prisma.department.update({ where: { id }, data: { isActive: false } });
  }

  private async ensureExists(id: string) {
    const dept = await this.prisma.department.findUnique({ where: { id } });
    if (!dept) throw new NotFoundException(`Department "${id}" not found`);
    return dept;
  }
}

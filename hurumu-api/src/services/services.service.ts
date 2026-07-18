import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ServiceCategory } from '../common/enums';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateServiceDto) { return this.prisma.service.create({ data: dto }); }

  findAll(category?: ServiceCategory) {
    return this.prisma.service.findMany({
      where: { isActive: true, ...(category && { category }) },
      orderBy: { sortOrder: 'asc' },
      include: { department: { select: { id: true, name: true } } },
    });
  }

  async findBySlug(slug: string) {
    const svc = await this.prisma.service.findUnique({ where: { slug }, include: { department: true } });
    if (!svc) throw new NotFoundException(`Service "${slug}" not found`);
    return svc;
  }

  async update(id: string, dto: UpdateServiceDto) {
    await this.ensureExists(id);
    return this.prisma.service.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.prisma.service.update({ where: { id }, data: { isActive: false } });
  }

  async submitApplication(serviceId: string, dto: CreateApplicationDto) {
    await this.ensureExists(serviceId);
    return this.prisma.serviceApplication.create({ data: { ...dto, serviceId }, include: { service: { select: { id: true, name: true } } } });
  }

  getApplicationsByService(serviceId: string) {
    return this.prisma.serviceApplication.findMany({ where: { serviceId }, orderBy: { submittedAt: 'desc' } });
  }

  async trackApplication(referenceNumber: string) {
    const app = await this.prisma.serviceApplication.findUnique({ where: { referenceNumber }, include: { service: { select: { name: true } }, kebele: true } });
    if (!app) throw new NotFoundException(`Application "${referenceNumber}" not found`);
    return app;
  }

  private async ensureExists(id: string) {
    const svc = await this.prisma.service.findUnique({ where: { id } });
    if (!svc) throw new NotFoundException(`Service "${id}" not found`);
    return svc;
  }
}

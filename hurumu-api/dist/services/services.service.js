"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ServicesService = exports.ServicesService = class ServicesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.service.create({ data: dto });
    }
    findAll(category) {
        return this.prisma.service.findMany({
            where: { isActive: true, ...(category && { category }) },
            orderBy: { sortOrder: 'asc' },
            include: { department: { select: { id: true, name: true } } },
        });
    }
    findAdminList(category) {
        return this.prisma.service.findMany({
            where: { ...(category && { category }) },
            orderBy: { sortOrder: 'asc' },
            include: { department: { select: { id: true, name: true } } },
        });
    }
    async findBySlug(slug) {
        const svc = await this.prisma.service.findUnique({
            where: { slug },
            include: { department: true },
        });
        if (!svc)
            throw new common_1.NotFoundException(`Service "${slug}" not found`);
        return svc;
    }
    async update(id, dto) {
        await this.ensureExists(id);
        return this.prisma.service.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prisma.service.update({
            where: { id },
            data: { isActive: false },
        });
    }
    async submitApplication(serviceId, dto) {
        await this.ensureExists(serviceId);
        return this.prisma.serviceApplication.create({
            data: { ...dto, serviceId },
            include: { service: { select: { id: true, name: true } } },
        });
    }
    getApplicationsByService(serviceId) {
        return this.prisma.serviceApplication.findMany({
            where: { serviceId },
            orderBy: { submittedAt: 'desc' },
        });
    }
    async trackApplication(referenceNumber) {
        const app = await this.prisma.serviceApplication.findUnique({
            where: { referenceNumber },
            include: { service: { select: { name: true } }, kebele: true },
        });
        if (!app)
            throw new common_1.NotFoundException(`Application "${referenceNumber}" not found`);
        return app;
    }
    async ensureExists(id) {
        const svc = await this.prisma.service.findUnique({ where: { id } });
        if (!svc)
            throw new common_1.NotFoundException(`Service "${id}" not found`);
        return svc;
    }
};
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicesService);
//# sourceMappingURL=services.service.js.map
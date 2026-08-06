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
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DepartmentsService = exports.DepartmentsService = class DepartmentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.department.findUnique({ where: { slug: dto.slug } });
        if (exists)
            throw new common_1.ConflictException('Department slug already exists');
        return this.prisma.department.create({ data: dto });
    }
    findAll() {
        return this.prisma.department.findMany({ where: { isActive: true }, orderBy: { sortOrder: 'asc' }, include: { _count: { select: { users: true, services: true, news: true } } } });
    }
    async findOne(slug) {
        const dept = await this.prisma.department.findUnique({ where: { slug }, include: { services: { where: { isActive: true } }, users: { select: { id: true, fullName: true, role: true } } } });
        if (!dept)
            throw new common_1.NotFoundException(`Department "${slug}" not found`);
        return dept;
    }
    async update(id, dto) {
        await this.ensureExists(id);
        return this.prisma.department.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prisma.department.update({ where: { id }, data: { isActive: false } });
    }
    async ensureExists(id) {
        const dept = await this.prisma.department.findUnique({ where: { id } });
        if (!dept)
            throw new common_1.NotFoundException(`Department "${id}" not found`);
        return dept;
    }
};
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map
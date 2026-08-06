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
exports.KebelesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let KebelesService = exports.KebelesService = class KebelesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const exists = await this.prisma.kebele.findUnique({ where: { number: dto.number } });
        if (exists)
            throw new common_1.ConflictException(`Kebele #${dto.number} already exists`);
        return this.prisma.kebele.create({ data: dto });
    }
    findAll() {
        return this.prisma.kebele.findMany({
            orderBy: { number: 'asc' },
            include: { _count: { select: { serviceApplications: true } } },
        });
    }
    async findOne(id) {
        const kebele = await this.prisma.kebele.findUnique({
            where: { id },
            include: { serviceApplications: { include: { service: { select: { name: true } } }, orderBy: { submittedAt: 'desc' }, take: 10 } },
        });
        if (!kebele)
            throw new common_1.NotFoundException(`Kebele "${id}" not found`);
        return kebele;
    }
    async update(id, dto) {
        await this.ensureExists(id);
        return this.prisma.kebele.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prisma.kebele.delete({ where: { id } });
    }
    async ensureExists(id) {
        const k = await this.prisma.kebele.findUnique({ where: { id } });
        if (!k)
            throw new common_1.NotFoundException(`Kebele "${id}" not found`);
        return k;
    }
};
exports.KebelesService = KebelesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], KebelesService);
//# sourceMappingURL=kebeles.service.js.map
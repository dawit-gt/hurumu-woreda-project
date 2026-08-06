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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DocumentsService = exports.DocumentsService = class DocumentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto, uploadedById) {
        return this.prisma.document.create({
            data: { ...dto, uploadedById },
            include: {
                department: { select: { id: true, name: true } },
                uploadedBy: { select: { id: true, fullName: true } },
            },
        });
    }
    findAll(type, fiscalYear) {
        return this.prisma.document.findMany({
            where: {
                isPublic: true,
                ...(type && { type }),
                ...(fiscalYear && { fiscalYear }),
            },
            orderBy: { createdAt: 'desc' },
            include: { department: { select: { id: true, name: true } } },
        });
    }
    findAdminList(type, fiscalYear) {
        return this.prisma.document.findMany({
            where: { ...(type && { type }), ...(fiscalYear && { fiscalYear }) },
            orderBy: { createdAt: 'desc' },
            include: {
                department: { select: { id: true, name: true } },
                uploadedBy: { select: { id: true, fullName: true } },
            },
        });
    }
    async findOne(id) {
        const doc = await this.prisma.document.findUnique({
            where: { id },
            include: {
                department: true,
                uploadedBy: { select: { id: true, fullName: true } },
            },
        });
        if (!doc)
            throw new common_1.NotFoundException(`Document "${id}" not found`);
        await this.prisma.document.update({
            where: { id },
            data: { downloadCount: { increment: 1 } },
        });
        return doc;
    }
    async update(id, dto) {
        await this.ensureExists(id);
        return this.prisma.document.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.ensureExists(id);
        return this.prisma.document.delete({ where: { id } });
    }
    async ensureExists(id) {
        const doc = await this.prisma.document.findUnique({ where: { id } });
        if (!doc)
            throw new common_1.NotFoundException(`Document "${id}" not found`);
        return doc;
    }
};
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map
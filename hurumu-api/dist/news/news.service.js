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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NewsService = exports.NewsService = class NewsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, authorId) {
        return this.prisma.news.create({
            data: {
                ...dto,
                authorId,
                publishedAt: dto.status === 'PUBLISHED' ? new Date() : null,
            },
            include: {
                author: { select: { id: true, fullName: true } },
                department: true,
            },
        });
    }
    async findAll(query, publicOnly = true) {
        const page = parseInt(query.page ?? '1');
        const limit = parseInt(query.limit ?? '10');
        const skip = (page - 1) * limit;
        const where = {};
        if (query.tag)
            where.tag = query.tag;
        if (query.status && !publicOnly)
            where.status = query.status;
        if (query.isUrgent !== undefined)
            where.isUrgent = query.isUrgent;
        if (query.departmentId)
            where.departmentId = query.departmentId;
        if (query.search) {
            where.OR = [
                { title: { contains: query.search, mode: 'insensitive' } },
                { excerpt: { contains: query.search, mode: 'insensitive' } },
            ];
        }
        if (publicOnly) {
            where.status = 'PUBLISHED';
        }
        const [items, total] = await Promise.all([
            this.prisma.news.findMany({
                where,
                skip,
                take: limit,
                orderBy: [
                    { isUrgent: 'desc' },
                    { publishedAt: 'desc' },
                    { createdAt: 'desc' },
                ],
                include: {
                    author: { select: { id: true, fullName: true } },
                    department: { select: { id: true, name: true } },
                },
            }),
            this.prisma.news.count({ where }),
        ]);
        return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
    }
    async findBySlug(slug) {
        const item = await this.prisma.news.findUnique({
            where: { slug },
            include: {
                author: { select: { id: true, fullName: true } },
                department: true,
            },
        });
        if (!item)
            throw new common_1.NotFoundException(`News item "${slug}" not found`);
        await this.prisma.news.update({
            where: { slug },
            data: { viewCount: { increment: 1 } },
        });
        return item;
    }
    async update(id, dto) {
        await this.findById(id);
        const data = { ...dto };
        if (dto.status === 'PUBLISHED')
            data.publishedAt = new Date();
        return this.prisma.news.update({
            where: { id },
            data,
            include: {
                author: { select: { id: true, fullName: true } },
                department: true,
            },
        });
    }
    async remove(id) {
        await this.findById(id);
        return this.prisma.news.delete({ where: { id } });
    }
    async findById(id) {
        const item = await this.prisma.news.findUnique({ where: { id } });
        if (!item)
            throw new common_1.NotFoundException(`News item "${id}" not found`);
        return item;
    }
};
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NewsService);
//# sourceMappingURL=news.service.js.map
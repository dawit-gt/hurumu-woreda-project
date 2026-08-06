import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsQueryDto } from './dto/news-query.dto';
export declare class NewsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNewsDto, authorId: string): Promise<{
        author: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phone: string;
            isActive: boolean;
            name: string;
            nameOromoo: string;
            nameAmharic: string;
            description: string;
            iconName: string;
            headName: string;
            sortOrder: number;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        titleAmharic: string;
        slug: string;
        excerpt: string;
        content: string;
        tag: import(".prisma/client").$Enums.NewsTag;
        status: import(".prisma/client").$Enums.NewsStatus;
        isUrgent: boolean;
        featuredImage: string;
        publishedAt: Date;
        viewCount: number;
        authorId: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(query: NewsQueryDto, publicOnly?: boolean): Promise<{
        items: ({
            author: {
                id: string;
                fullName: string;
            };
            department: {
                id: string;
                name: string;
            };
        } & {
            id: string;
            title: string;
            titleOromoo: string;
            titleAmharic: string;
            slug: string;
            excerpt: string;
            content: string;
            tag: import(".prisma/client").$Enums.NewsTag;
            status: import(".prisma/client").$Enums.NewsStatus;
            isUrgent: boolean;
            featuredImage: string;
            publishedAt: Date;
            viewCount: number;
            authorId: string;
            departmentId: string;
            createdAt: Date;
            updatedAt: Date;
        })[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    findBySlug(slug: string): Promise<{
        author: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phone: string;
            isActive: boolean;
            name: string;
            nameOromoo: string;
            nameAmharic: string;
            description: string;
            iconName: string;
            headName: string;
            sortOrder: number;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        titleAmharic: string;
        slug: string;
        excerpt: string;
        content: string;
        tag: import(".prisma/client").$Enums.NewsTag;
        status: import(".prisma/client").$Enums.NewsStatus;
        isUrgent: boolean;
        featuredImage: string;
        publishedAt: Date;
        viewCount: number;
        authorId: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateNewsDto): Promise<{
        author: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            slug: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            phone: string;
            isActive: boolean;
            name: string;
            nameOromoo: string;
            nameAmharic: string;
            description: string;
            iconName: string;
            headName: string;
            sortOrder: number;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        titleAmharic: string;
        slug: string;
        excerpt: string;
        content: string;
        tag: import(".prisma/client").$Enums.NewsTag;
        status: import(".prisma/client").$Enums.NewsStatus;
        isUrgent: boolean;
        featuredImage: string;
        publishedAt: Date;
        viewCount: number;
        authorId: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        titleOromoo: string;
        titleAmharic: string;
        slug: string;
        excerpt: string;
        content: string;
        tag: import(".prisma/client").$Enums.NewsTag;
        status: import(".prisma/client").$Enums.NewsStatus;
        isUrgent: boolean;
        featuredImage: string;
        publishedAt: Date;
        viewCount: number;
        authorId: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private findById;
}

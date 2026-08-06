import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { DocumentType } from '../common/enums';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    findAll(type?: DocumentType, fiscalYear?: string): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            id: string;
            name: string;
        };
    } & {
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findAdmin(type?: DocumentType, fiscalYear?: string): import(".prisma/client").Prisma.PrismaPromise<({
        uploadedBy: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            name: string;
        };
    } & {
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        uploadedBy: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            description: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            nameOromoo: string;
            nameAmharic: string;
            slug: string;
            iconName: string;
            headName: string;
            phone: string;
            email: string;
            isActive: boolean;
            sortOrder: number;
        };
    } & {
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    create(dto: CreateDocumentDto, userId: string): import(".prisma/client").Prisma.Prisma__DocumentClient<{
        uploadedBy: {
            id: string;
            fullName: string;
        };
        department: {
            id: string;
            name: string;
        };
    } & {
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: UpdateDocumentDto): Promise<{
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fiscalYear: string;
        id: string;
        title: string;
        titleOromoo: string;
        description: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

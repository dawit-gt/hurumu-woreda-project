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
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    })[]>;
    findAdmin(type?: DocumentType, fiscalYear?: string): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            id: string;
            name: string;
        };
        uploadedBy: {
            id: string;
            fullName: string;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    })[]>;
    findOne(id: string): Promise<{
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
        uploadedBy: {
            id: string;
            fullName: string;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    }>;
    create(dto: CreateDocumentDto, userId: string): import(".prisma/client").Prisma.Prisma__DocumentClient<{
        department: {
            id: string;
            name: string;
        };
        uploadedBy: {
            id: string;
            fullName: string;
        };
    } & {
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: UpdateDocumentDto): Promise<{
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        titleOromoo: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        isPublic: boolean;
        type: import(".prisma/client").$Enums.DocumentType;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        fiscalYear: string;
        quarter: number;
        downloadCount: number;
        uploadedById: string;
    }>;
}

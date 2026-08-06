import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ServiceCategory } from '../common/enums';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        id: string;
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(category?: ServiceCategory): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    })[]>;
    findAdminList(category?: ServiceCategory): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    })[]>;
    findBySlug(slug: string): Promise<{
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
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    }>;
    update(id: string, dto: UpdateServiceDto): Promise<{
        id: string;
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        slug: string;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        description: string;
        iconName: string;
        sortOrder: number;
        category: import(".prisma/client").$Enums.ServiceCategory;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
    }>;
    submitApplication(serviceId: string, dto: CreateApplicationDto): Promise<{
        service: {
            id: string;
            name: string;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        updatedAt: Date;
        description: string;
        referenceNumber: string;
        applicantName: string;
        applicantPhone: string;
        applicantEmail: string;
        reviewNotes: string;
        attachments: string[];
        serviceId: string;
        kebeleId: string;
        submittedAt: Date;
        reviewedAt: Date;
        resolvedAt: Date;
    }>;
    getApplicationsByService(serviceId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        updatedAt: Date;
        description: string;
        referenceNumber: string;
        applicantName: string;
        applicantPhone: string;
        applicantEmail: string;
        reviewNotes: string;
        attachments: string[];
        serviceId: string;
        kebeleId: string;
        submittedAt: Date;
        reviewedAt: Date;
        resolvedAt: Date;
    }[]>;
    trackApplication(referenceNumber: string): Promise<{
        service: {
            name: string;
        };
        kebele: {
            number: number;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            name: string;
            nameOromoo: string;
            population: number;
            area: number;
            chairperson: string;
        };
    } & {
        id: string;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        updatedAt: Date;
        description: string;
        referenceNumber: string;
        applicantName: string;
        applicantPhone: string;
        applicantEmail: string;
        reviewNotes: string;
        attachments: string[];
        serviceId: string;
        kebeleId: string;
        submittedAt: Date;
        reviewedAt: Date;
        resolvedAt: Date;
    }>;
    private ensureExists;
}

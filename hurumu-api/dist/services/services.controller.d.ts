import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateApplicationDto } from './dto/create-application.dto';
import { ServiceCategory } from '../common/enums';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(category?: ServiceCategory): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            name: string;
            id: string;
        };
    } & {
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findAdmin(category?: ServiceCategory): import(".prisma/client").Prisma.PrismaPromise<({
        department: {
            name: string;
            id: string;
        };
    } & {
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    trackApplication(ref: string): Promise<{
        service: {
            name: string;
        };
        kebele: {
            number: number;
            name: string;
            id: string;
            nameOromoo: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            population: number;
            area: number;
            chairperson: string;
        };
    } & {
        description: string;
        id: string;
        updatedAt: Date;
        referenceNumber: string;
        applicantName: string;
        applicantPhone: string;
        applicantEmail: string;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        reviewNotes: string;
        attachments: string[];
        serviceId: string;
        kebeleId: string;
        submittedAt: Date;
        reviewedAt: Date;
        resolvedAt: Date;
    }>;
    findOne(slug: string): Promise<{
        department: {
            description: string;
            name: string;
            id: string;
            nameOromoo: string;
            nameAmharic: string;
            slug: string;
            iconName: string;
            isActive: boolean;
            sortOrder: number;
            createdAt: Date;
            updatedAt: Date;
            headName: string;
            phone: string;
            email: string;
        };
    } & {
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    apply(id: string, dto: CreateApplicationDto): Promise<{
        service: {
            name: string;
            id: string;
        };
    } & {
        description: string;
        id: string;
        updatedAt: Date;
        referenceNumber: string;
        applicantName: string;
        applicantPhone: string;
        applicantEmail: string;
        status: import(".prisma/client").$Enums.ApplicationStatus;
        reviewNotes: string;
        attachments: string[];
        serviceId: string;
        kebeleId: string;
        submittedAt: Date;
        reviewedAt: Date;
        resolvedAt: Date;
    }>;
    create(dto: CreateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: UpdateServiceDto): Promise<{
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        description: string;
        name: string;
        category: import(".prisma/client").$Enums.ServiceCategory;
        id: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        fee: number;
        processingDays: number;
        requiredDocs: string[];
        steps: string[];
        isOnline: boolean;
        isActive: boolean;
        sortOrder: number;
        departmentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

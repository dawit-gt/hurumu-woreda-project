import { KebelesService } from './kebeles.service';
import { CreateKebeleDto } from './dto/create-kebele.dto';
import { UpdateKebeleDto } from './dto/update-kebele.dto';
export declare class KebelesController {
    private readonly kebelesService;
    constructor(kebelesService: KebelesService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            serviceApplications: number;
        };
    } & {
        number: number;
        phone: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        population: number;
        area: number;
        chairperson: string;
    })[]>;
    findOne(id: string): Promise<{
        serviceApplications: ({
            service: {
                name: string;
            };
        } & {
            description: string;
            id: string;
            updatedAt: Date;
            status: import(".prisma/client").$Enums.ApplicationStatus;
            applicantName: string;
            applicantPhone: string;
            applicantEmail: string;
            attachments: string[];
            kebeleId: string;
            referenceNumber: string;
            reviewNotes: string;
            serviceId: string;
            submittedAt: Date;
            reviewedAt: Date;
            resolvedAt: Date;
        })[];
    } & {
        number: number;
        phone: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        population: number;
        area: number;
        chairperson: string;
    }>;
    create(dto: CreateKebeleDto): Promise<{
        number: number;
        phone: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        population: number;
        area: number;
        chairperson: string;
    }>;
    update(id: string, dto: UpdateKebeleDto): Promise<{
        number: number;
        phone: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        population: number;
        area: number;
        chairperson: string;
    }>;
    remove(id: string): Promise<{
        number: number;
        phone: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        population: number;
        area: number;
        chairperson: string;
    }>;
}

import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            news: number;
            users: number;
            services: number;
        };
    } & {
        description: string;
        email: string;
        phone: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        headName: string;
        sortOrder: number;
    })[]>;
    findOne(slug: string): Promise<{
        users: {
            fullName: string;
            role: import(".prisma/client").$Enums.Role;
            id: string;
        }[];
        services: {
            description: string;
            departmentId: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            nameOromoo: string;
            nameAmharic: string;
            slug: string;
            iconName: string;
            sortOrder: number;
            category: import(".prisma/client").$Enums.ServiceCategory;
            fee: number;
            processingDays: number;
            requiredDocs: string[];
            steps: string[];
            isOnline: boolean;
        }[];
    } & {
        description: string;
        email: string;
        phone: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        headName: string;
        sortOrder: number;
    }>;
    create(dto: CreateDepartmentDto): Promise<{
        description: string;
        email: string;
        phone: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        headName: string;
        sortOrder: number;
    }>;
    update(id: string, dto: UpdateDepartmentDto): Promise<{
        description: string;
        email: string;
        phone: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        headName: string;
        sortOrder: number;
    }>;
    remove(id: string): Promise<{
        description: string;
        email: string;
        phone: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        nameOromoo: string;
        nameAmharic: string;
        slug: string;
        iconName: string;
        headName: string;
        sortOrder: number;
    }>;
}

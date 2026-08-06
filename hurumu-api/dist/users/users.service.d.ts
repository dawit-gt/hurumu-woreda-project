import { PrismaService } from '../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        department: {
            id: string;
            name: string;
        };
        email: string;
        fullName: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        departmentId: string;
        id: string;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        department: {
            id: string;
            name: string;
        };
        email: string;
        fullName: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        departmentId: string;
        id: string;
        isActive: boolean;
        avatarUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
        email: string;
        fullName: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        departmentId: string;
        id: string;
        isActive: boolean;
    }>;
    changePassword(id: string, dto: ChangePasswordDto): Promise<{
        message: string;
    }>;
    deactivate(id: string): Promise<{
        email: string;
        id: string;
        isActive: boolean;
    }>;
    getProfile(id: string): Promise<{
        department: {
            id: string;
            name: string;
        };
        email: string;
        fullName: string;
        phone: string;
        role: import(".prisma/client").$Enums.Role;
        departmentId: string;
        id: string;
        isActive: boolean;
        avatarUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

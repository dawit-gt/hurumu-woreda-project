import { Role } from '../../common/enums';
export declare class RegisterDto {
    fullName: string;
    email: string;
    password: string;
    phone?: string;
    role?: Role;
    departmentId?: string;
}

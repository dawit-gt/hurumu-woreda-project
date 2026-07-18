import { IsEmail, IsString, MinLength, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Role } from '../../common/enums';

export class RegisterDto {
  @ApiProperty({ example: 'Abebe Bikila' }) @IsString() fullName: string;
  @ApiProperty({ example: 'abebe@hurumu.pro.et' }) @IsEmail() email: string;
  @ApiProperty({ example: 'SecurePass123!' }) @IsString() @MinLength(8) password: string;
  @ApiPropertyOptional({ example: '+251911234567' }) @IsOptional() @IsString() phone?: string;
  @ApiPropertyOptional({ enum: Role }) @IsOptional() @IsEnum(Role) role?: Role;
  @ApiPropertyOptional() @IsOptional() @IsString() departmentId?: string;
}

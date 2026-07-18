import { IsString, IsOptional, IsEmail, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateApplicationDto {
  @ApiProperty() @IsString() applicantName: string;
  @ApiProperty() @IsString() applicantPhone: string;
  @ApiPropertyOptional() @IsOptional() @IsEmail() applicantEmail?: string;
  @ApiPropertyOptional() @IsOptional() @IsString() description?: string;
  @ApiPropertyOptional({ type: [String] }) @IsOptional() @IsArray() attachments?: string[];
  @ApiPropertyOptional() @IsOptional() @IsString() kebeleId?: string;
}

import { PartialType } from '@nestjs/swagger';
import { CreateKebeleDto } from './create-kebele.dto';
export class UpdateKebeleDto extends PartialType(CreateKebeleDto) {}

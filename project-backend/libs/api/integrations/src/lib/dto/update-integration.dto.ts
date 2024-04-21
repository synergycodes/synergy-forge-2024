import { PartialType } from '@nestjs/mapped-types';
import { CreateIntegrationDto } from './create-integration.dto';

export class UpdateIntegrationDto extends PartialType(CreateIntegrationDto) {}

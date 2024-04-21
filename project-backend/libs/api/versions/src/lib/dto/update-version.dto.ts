import { PartialType } from '@nestjs/mapped-types';
import { VersionEntity } from "../entities/version.entity";

export class UpdateVersionDto extends PartialType(VersionEntity) {
}

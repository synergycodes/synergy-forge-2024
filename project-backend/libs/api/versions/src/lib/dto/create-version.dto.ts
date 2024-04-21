import { PickType } from "@nestjs/mapped-types";
import { VersionEntity } from "../entities/version.entity";

export class CreateVersionDto extends PickType(VersionEntity, ['name', 'integrationId']) {
}


import { PickType } from "@nestjs/mapped-types";
import { IntegrationEntity } from "../entities/integration.entity";

export class CreateIntegrationDto extends PickType(IntegrationEntity, ['name', 'budget', 'participants', 'dateStart', 'dateEnd']) {
}


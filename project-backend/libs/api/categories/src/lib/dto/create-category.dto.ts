import { PickType } from "@nestjs/mapped-types";
import { CategoryEntity } from "../entities/category.entity";

export class CreateCategoryDto extends PickType(CategoryEntity, ['name', 'integrationId']) {
}


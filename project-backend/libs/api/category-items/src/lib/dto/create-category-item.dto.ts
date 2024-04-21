import { PickType } from "@nestjs/mapped-types";
import { CategoryItemEntity } from "../entities/category-item.entity";

export class CreateCategoryItemDto extends PickType(CategoryItemEntity, ['name', 'categoryId', 'versionId', 'cost', 'perParticipant']) {
}

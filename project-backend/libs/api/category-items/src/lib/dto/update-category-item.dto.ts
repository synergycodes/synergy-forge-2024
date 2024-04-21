import { PartialType } from '@nestjs/mapped-types';
import { CategoryItemEntity } from "../entities/category-item.entity";

export class UpdateCategoryItemDto extends PartialType(CategoryItemEntity) {
}

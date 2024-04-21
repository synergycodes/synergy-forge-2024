import { PartialType } from '@nestjs/mapped-types';
import { CategoryEntity } from "../entities/category.entity";

export class UpdateCategoryDto extends PartialType(CategoryEntity) {
}

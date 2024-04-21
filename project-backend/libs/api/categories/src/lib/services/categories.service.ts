import { Injectable } from '@nestjs/common';
import { AbstractService } from "@synergy-forge/api/core";
import { DatabaseService } from "@synergy-forge/api/database";
import { CategoryEntity } from "../entities/category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

@Injectable()
export class CategoriesService extends AbstractService<CategoryEntity, CreateCategoryDto, UpdateCategoryDto> {

  constructor(protected override db: DatabaseService) {
    super(db);
    this.entityName = 'category';
  }

}

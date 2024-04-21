import { Controller } from '@nestjs/common';
import { AbstractController } from "@synergy-forge/api/core";
import { CategoryEntity } from "../entities/category.entity";
import { CategoriesService } from "../services/categories.service";

@Controller('categories')
export class CategoriesController extends AbstractController<CategoryEntity> {

  constructor(protected service: CategoriesService) {
    super(service);
  }
}

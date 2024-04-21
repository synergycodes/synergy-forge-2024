import { Controller } from '@nestjs/common';
import { CategoryItemsService } from '../services/category-items.service';
import { AbstractController } from "@synergy-forge/api/core";
import { CategoryItemEntity } from "../entities/category-item.entity";

@Controller('category-items')
export class CategoryItemsController extends AbstractController<CategoryItemEntity> {
  constructor(protected service: CategoryItemsService) {
    super(service);
  }
}


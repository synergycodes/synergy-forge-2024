import { Module } from '@nestjs/common';
import { DatabaseModule } from '@synergy-forge/api/database';
import { IntegrationsModule } from '@synergy-forge/api/integrations';
import { CategoriesModule } from "@synergy-forge/api/categories";
import { CategoryItemsModule } from "@synergy-forge/api/category-items";
import { VersionsModule } from "@synergy-forge/api/versions";

@Module({
  imports: [DatabaseModule, IntegrationsModule, CategoriesModule, CategoryItemsModule, VersionsModule],
})
export class AppModule { }

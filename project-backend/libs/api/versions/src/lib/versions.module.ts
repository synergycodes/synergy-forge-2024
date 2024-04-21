import { Module } from '@nestjs/common';
import { VersionsController } from './controllers/versions.controller';
import { VersionsService } from './services/versions.service';
import { DatabaseModule } from "@synergy-forge/api/database";

@Module({
  imports: [DatabaseModule],
  controllers: [VersionsController],
  providers: [VersionsService],
  exports: [VersionsService],
})
export class VersionsModule {
}

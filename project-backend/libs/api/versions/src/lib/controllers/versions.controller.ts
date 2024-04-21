import { Controller, Param, Post } from '@nestjs/common';
import { VersionsService } from '../services/versions.service';
import { AbstractController } from "@synergy-forge/api/core";
import { VersionEntity } from "../entities/version.entity";

@Controller('versions')
export class VersionsController extends AbstractController<VersionEntity> {
  constructor(protected override service: VersionsService) {
    super(service);
  }

  @Post(':id/duplicate')
  duplicate(@Param('id') id: string) {
    return this.service.duplicate(id);
  }

}


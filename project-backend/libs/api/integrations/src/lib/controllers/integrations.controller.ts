import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { IntegrationsService } from '../services/integrations.service';
import { IntegrationEntity } from "../entities/integration.entity";
import { AbstractController } from "@synergy-forge/api/core";

@Controller('integrations')
export class IntegrationsController extends AbstractController<IntegrationEntity> {

  constructor(protected override service: IntegrationsService) {
    super(service);
  }

  @Get(':id/full')
  findFull(@Param('id') id: string) {
    const parsed = Number(id);
    if (isNaN(parsed) || parsed !== parseInt(id)) {
        return new BadRequestException('Invalid ID, expected type integer');
    }

    return this.service.findFull(parsed);
  }
}

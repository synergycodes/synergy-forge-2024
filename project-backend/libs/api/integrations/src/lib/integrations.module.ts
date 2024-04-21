import { Module } from '@nestjs/common';
import { IntegrationsController } from './controllers/integrations.controller';
import { IntegrationsService } from './services/integrations.service';
import { DatabaseModule } from '@synergy-forge/api/database';

@Module({
  imports: [DatabaseModule],
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
  exports: [IntegrationsService],
})
export class IntegrationsModule {}

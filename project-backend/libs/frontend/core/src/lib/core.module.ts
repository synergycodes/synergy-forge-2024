import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationsService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [IntegrationsService],
})
export class CoreModule {}

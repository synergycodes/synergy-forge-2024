import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationListComponent } from './integration-list/integration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationItemComponent } from './integration-item/integration-item.component';
import { CoreModule } from '@synergy-forge/frontend/core';

const routes: Routes = [
  {
    path: '',
    component: IntegrationListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
  declarations: [IntegrationListComponent, IntegrationItemComponent],
  providers: [],
})
export class IntegrationsModule {}

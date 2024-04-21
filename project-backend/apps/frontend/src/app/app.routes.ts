import { Route } from '@angular/router';
import { IntegrationsModule } from '@synergy-forge/frontend/integrations';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => IntegrationsModule,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

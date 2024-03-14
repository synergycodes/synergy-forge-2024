import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/first',
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: FirstComponent,
  },
];

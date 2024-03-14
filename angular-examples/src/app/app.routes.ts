import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { InlineComponent } from './components/inline/inline.component';
import { DataBindingsComponent } from './components/data-bindings/data-bindings.component';
import { ParentComponent } from './components/parent/parent.component';
import { SumComponent } from './components/sum/sum.component';
import { SameInstanceOfServiceComponent } from './components/same-instance-of-service/same-instance-of-service.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { MoviesComponent } from './components/routing/movies/movies.component';
import { MovieDetailComponent } from './components/routing/movies/movie-detail/movie-detail.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FirstPageComponent } from './module/first-page/first-page.component';

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
  {
    path: 'inline',
    component: InlineComponent,
  },
  {
    path: 'module',
    component: FirstPageComponent,
  },
  {
    path: 'data-bindings',
    component: DataBindingsComponent,
  },
  {
    path: 'components-communication',
    component: ParentComponent,
  },
  {
    path: 'sum',
    component: SumComponent,
  },
  {
    path: 'same-instance-of-service',
    component: SameInstanceOfServiceComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'routing',
    component: MoviesComponent,
    children: [
      {
        path: ':id',
        component: MovieDetailComponent,
      },
    ],
  },
];

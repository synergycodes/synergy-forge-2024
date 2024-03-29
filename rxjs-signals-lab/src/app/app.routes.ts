import { Routes } from '@angular/router';

import { Lab1Component } from './labs/lab-1/lab-1.component';
import { Lab2Component } from './labs/lab-2/lab-2.component';
import { Lab3Component } from './labs/lab-3/lab-3.component';
import { Lab4Component } from './labs/lab-4/lab-4.component';
import { Lab5Component } from './labs/lab-5/lab-5.component';

import { RouteUrl } from './app.enums';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: RouteUrl.LAB_1,
    },
    {
        path: RouteUrl.LAB_1,
        component: Lab1Component,
    },
    {
        path: RouteUrl.LAB_2,
        component: Lab2Component,
    },
    {
        path: RouteUrl.LAB_3,
        component: Lab3Component,
    },
    {
        path: RouteUrl.LAB_4,
        component: Lab4Component,
    },
    {
        path: RouteUrl.LAB_5,
        component: Lab5Component,
    }
];

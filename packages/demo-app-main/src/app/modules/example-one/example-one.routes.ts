import { RouterModule, Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one.component';

export const moduleRoutes: Routes = [
  {
    path: "one",
    component: ExampleOneComponent,
  }
];

export const LocalRouterModule = RouterModule.forChild(
  moduleRoutes
);

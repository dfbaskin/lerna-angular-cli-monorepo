import { RouterModule, Routes } from '@angular/router';
import { ExampleTwoComponent } from './example-two.component';

export const moduleRoutes: Routes = [
  {
    path: "",
    component: ExampleTwoComponent,
    pathMatch: "full"
  }
];

export const LocalRouterModule = RouterModule.forChild(
  moduleRoutes
);

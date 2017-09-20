import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleThreeComponent } from './example-three.component';

export const moduleRoutes: Routes = [
  {
    path: "three",
    component: ExampleThreeComponent,
  }
];

export const LocalRouterModule: ModuleWithProviders = RouterModule.forChild(
  moduleRoutes
);

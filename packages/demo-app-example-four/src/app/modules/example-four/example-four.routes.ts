import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFourComponent } from './example-four.component';

export const moduleRoutes: Routes = [
  {
    path: "",
    component: ExampleFourComponent,
    pathMatch: "full"
  }
];

export const LocalRouterModule: ModuleWithProviders = RouterModule.forChild(
  moduleRoutes
);

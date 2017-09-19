import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from "@angular/core";

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  // Path "one" merged from example-one module.
  {
    path: "two",
    loadChildren: "./modules/example-two/example-two.module#ExampleTwoModule"
  },
  {
    path: "**",
    redirectTo: "/",
  }
];

export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  //{ enableTracing: true } // <-- debugging purposes only
);

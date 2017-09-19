import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from "@angular/core";

@Component({
  selector: 'app-route-placeholder',
  template: `
    <p>To Do ...</p>
  `
})
export class RoutePlaceholderComponent { }

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
    path: "three",
    component: RoutePlaceholderComponent
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

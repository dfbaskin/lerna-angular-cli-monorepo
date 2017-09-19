import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Component } from "@angular/core";

@Component({
  selector: 'app-route-placeholder',
  template: `
    <div>To Do ...</div>
  `
})
export class RoutePlaceholderComponent { }

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "one",
    component: RoutePlaceholderComponent
  },
  {
    path: "two",
    component: RoutePlaceholderComponent
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

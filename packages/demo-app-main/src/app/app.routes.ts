import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  // Path "one" merged from example-one local module.
  {
    path: "two",
    loadChildren: "./modules/example-two/example-two.module#ExampleTwoModule"
  },
  // Path "three" merged from example-three library module.
  {
    path: "four",
    //loadChildren: "demo-app-example-four/dist#ExampleFourModule"
    loadChildren: "../../node_modules/demo-app-example-four/dist#ExampleFourModule"
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

export const AppRouterModule = RouterModule.forRoot(
  appRoutes,
  //{ enableTracing: true } // <-- debugging purposes only
);

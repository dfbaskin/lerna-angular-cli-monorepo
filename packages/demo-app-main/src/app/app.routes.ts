import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Fix for AOT compiler
export function loadExampleFourModule() {
  return System
    .import('./libs/demo-app-example-four')
    .then(function(module) {
      return module.ExampleFourModule;
    });
}

declare const System: any;

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
    loadChildren: loadExampleFourModule
    // // This syntax breaks the AOT compiler:
    // loadChildren: function loadExampleFourModule() {
    //   return System
    //     .import('./libs/demo-app-example-four')
    //     .then(function(module) {
    //       return module.ExampleFourModule;
    //     });
    // }
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOneComponent } from './example-one.component';
import { LocalRouterModule } from "./example-one.routes";

@NgModule({
  imports: [
    CommonModule,
    LocalRouterModule
  ],
  declarations: [
    ExampleOneComponent
  ]
})
export class ExampleOneModule { }

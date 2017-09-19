import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTwoComponent } from './example-two.component';
import { LocalRouterModule } from "./example-two.routes";

@NgModule({
  imports: [
    CommonModule,
    LocalRouterModule
  ],
  declarations: [
    ExampleTwoComponent
  ]
})
export class ExampleTwoModule { }

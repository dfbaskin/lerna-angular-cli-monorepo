import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFourComponent } from './example-four.component';
import { LocalRouterModule } from './example-four.routes';

@NgModule({
  imports: [
    CommonModule,
    LocalRouterModule
  ],
  declarations: [
    ExampleFourComponent
  ]
})
export class ExampleFourModule { }

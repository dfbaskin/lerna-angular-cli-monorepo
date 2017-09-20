import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleThreeComponent } from './example-three.component';
import { LocalRouterModule } from './example-three.routes';

@NgModule({
  imports: [
    CommonModule,
    LocalRouterModule
  ],
  declarations: [
    ExampleThreeComponent
  ]
})
export class ExampleThreeModule { }

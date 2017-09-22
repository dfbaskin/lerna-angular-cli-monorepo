import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ExampleOneModule } from './modules/example-one/example-one.module';
import { ExampleThreeModule } from './libs/demo-app-example-three';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ExampleOneModule,
    ExampleThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

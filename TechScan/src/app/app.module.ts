import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePage } from "../pages/home/home.page";
import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

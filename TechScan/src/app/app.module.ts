import { HeaderComponent } from '../components/header/header';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePage } from "../pages/home/home.page";
import { appRoutes } from "./app.routes";
import { FooterComponent } from "../components/footer/footer";
import { TechnologyPageComponent } from "../pages/technologies/technology.page";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,  
    FooterComponent,
    TechnologyPageComponent
    
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

//https://api.github.com/search/repositories?q=+language:java&sort=stars&order=desc
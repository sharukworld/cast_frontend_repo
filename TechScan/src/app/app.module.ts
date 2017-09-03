import { HttpModule } from '@angular/http';
import { HeaderComponent } from '../components/header/header';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePage } from "../pages/home/home.page";
import { appRoutes } from "./app.routes";
import { FooterComponent } from "../components/footer/footer";
import { TechnologyPageComponent } from "../pages/technologies/technology.page";
import { MyHttpService } from "../services/my-http-service/http.service";
import { TechnologyService } from "../services/technology-service/technologyService";
import { LanguageRepoCountComponent } from "../components/language-repo-side-card/language-repo-side-card";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HeaderComponent,  
    FooterComponent,
    TechnologyPageComponent,
    LanguageRepoCountComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
      RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [MyHttpService,TechnologyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://api.github.com/search/repositories?q=+language:java&sort=stars&order=desc
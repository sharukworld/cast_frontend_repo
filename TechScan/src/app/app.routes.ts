import { TechnologyPageComponent } from '../pages/technologies/technology.page';
import { Routes } from '@angular/router';
import { HomePage } from "../pages/home/home.page";
export const appRoutes: Routes = [
   { path: '', redirectTo: '/technology', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  {path: 'technology', component: TechnologyPageComponent}
  
];
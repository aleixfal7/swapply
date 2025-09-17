import { Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { InterestsComponent } from './interests/interests.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: 'skills', component: SkillsComponent }, // ruta per veure SkillsComponent
  { path: 'interests', component: InterestsComponent }, // ruta per veure InterestsComponent
  { path: '', component: HomeComponent }, // ruta principal muestra el componente Home
];


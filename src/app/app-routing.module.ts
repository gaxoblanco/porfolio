import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {HomeComponent} from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'skill', component:SkillListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

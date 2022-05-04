import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {HomeComponent} from './components/home/home.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { IAmComponent } from './components/about-card/i-am.component';
import { ContactComponent } from './components/contact/contact.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:IniciarSesionComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'skill', component:SkillListComponent},
  {path: 'study', component:EstudioComponent},
  {path: 'about', component: IAmComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {HomeComponent} from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { EmailsComponent } from './components/emails/emails.component';
import { PDFComponent } from './components/pdf/pdf.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:IniciarSesionComponent},
  {path: 'work', component:WorkComponent},
  {path: 'skill', component:SkillListComponent},
  {path: 'study', component:EstudioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'post', component: PostComponent},
  {path: 'email', component: EmailsComponent},
  {path: 'GastonBlanco', component: PDFComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

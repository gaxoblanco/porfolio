import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent} from './components/iniciar-sesion/iniciar-sesion.component';
import {HomeComponent} from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { AboutComponent } from './components/about/about.component';
import { PDFComponent } from './components/pdf/pdf.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'home',
  //   component:HomeComponent,
  //   loadChildren: () => import('./components/home/home.component').then(m => m.HomeComponent)},
  // {path: 'work', component:WorkComponent,
  //   loadChildren: () => import('./components/work/work.component').then(m => m.WorkComponent)},
  // {path: 'skill', component:SkillListComponent,
  // loadChildren: () => import('./components/skill-list/skill-list.component').then(m => m.SkillListComponent)},
  // {path: 'study', component:EstudioComponent,
  // loadChildren: () => import('./components/estudio/estudio.component').then(m => m.EstudioComponent)},
  // {path: 'about', component: AboutComponent,
  // loadChildren: () => import('./components/about/about.component').then(m => m.AboutComponent)},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  { path: 'work', loadChildren: () => import('./module/work/work.module').then(m => m.WorkModule) },
  { path: 'skill', loadChildren: () => import('./module/skill/skill.module').then(m => m.SkillModule) },
  { path: 'study', loadChildren: () => import('./module/estudio/estudio.module').then(m => m.EstudioModule) },
  { path: 'about', loadChildren: () => import('./module/about/about.module').then(m => m.AboutModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

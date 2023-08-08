import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule) },
  { path: 'work', loadChildren: () => import('./module/work/work.module').then(m => m.WorkModule) },
  { path: 'skill', loadChildren: () => import('./module/skill/skill.module').then(m => m.SkillModule) },
  { path: 'study', loadChildren: () => import('./module/estudio/estudio.module').then(m => m.EstudioModule) },
  { path: 'about', loadChildren: () => import('./module/about/about.module').then(m => m.AboutModule) },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

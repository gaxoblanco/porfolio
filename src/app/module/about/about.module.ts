import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from 'src/app/components/about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AboutModule { }

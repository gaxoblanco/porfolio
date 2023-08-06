import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from 'src/app/components/work/work.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: WorkComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class WorkModule { }

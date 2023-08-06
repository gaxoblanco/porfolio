import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudioComponent } from 'src/app/components/estudio/estudio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EstudioComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class EstudioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from 'src/app/components/skill-list/skill-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SkillListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class SkillModule { }

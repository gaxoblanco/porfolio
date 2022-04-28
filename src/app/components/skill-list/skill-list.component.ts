import { Component, OnInit } from '@angular/core';
import {ArrayService} from '../../services/array.service';

import {Skill, CreateSkillDTO} from '../../models/skillObj';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skillList: any;
  constructor(
    private arrayService: ArrayService) { }

  ngOnInit(): void {
    this.arrayService.getAllSkills()
    .subscribe(data =>{
      this.skillList = data;
    });
  }

  deleteSkill(skill: Skill){
    console.log(skill);
  }
  onShowDetail(id: string){
    this.arrayService.getSkill(id)
    .subscribe(data =>{
      console.log('skill', data)
    })
  }
  createNewSkill(){
    const skill: CreateSkillDTO = {
      title:'Sumando',
      description:'prueba A ',
      image: '',
      url: 'http',
    }
    this.arrayService.create(skill)
    .subscribe(data =>{
      console.log('create', data)
    })
  }
}

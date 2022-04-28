import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skillObj';
import {SkillService} from '../../services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  skillList: Skill[] = [];

  constructor(
    private skillService: SkillService,
    ) { }


  ngOnInit(): void {
    this.skillService.getAllSkills()
    .subscribe(data =>{
      console.log(data);
      this.skillList = data;
    });
  }

  getAllSkill(){
    this.skillService.getAllSkills();
  }
}

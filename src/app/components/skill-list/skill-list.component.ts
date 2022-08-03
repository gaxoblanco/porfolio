import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skillObj';
import {SkillService} from '../../services/skill.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  loading = {
    nombre:'Loading...' ,
    descripcion:'Prendiendo servidor, puede demorar algunos segundos',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }

  skillList: any[] = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    private skillService: SkillService,
    ) { }


  ngOnInit(): void {
    this.skillService.getAllSkills()
    .subscribe(data =>{
      this.skillList = data;
    });
  }



}

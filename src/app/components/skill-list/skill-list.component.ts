import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skillObj';
import {SkillService} from '../../services/skill.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  loading = {
    nombre:'Loading...' ,
    descripcion:'Starting the server, wait a few minutes',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }

  skillList: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    private skillService: SkillService,
    ) { }


  ngOnInit(): void {
    // this.skillService.getAllSkills()
    // .subscribe(data =>{
    //   this.skillList = data;
    // });
    setTimeout(() => {
      try {
        console.log(dataBase);
        this.skillList = dataBase[6].data;
      } catch (error) {
        console.error(error);
      }
    }, 400);
  }



}

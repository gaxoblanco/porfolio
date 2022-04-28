import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import {Experience} from '../../models/experienceObj';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  exp: any = [];

  constructor(private experienceServ: ExperienceService) { }

  ngOnInit(): void {
    this.experienceServ.getAllSkills()
    .subscribe(data =>{
      console.log(data);
      this.exp = data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  exp: any = [];

  constructor(private experienceServ: ExperienceService) { }

  ngOnInit(): void {
    this.experienceServ.getAllExperiences()
    .subscribe(data =>{
      this.exp = data;
    });
  }

}

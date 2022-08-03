import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { ExperienceLoading} from '../../models/experienceObj';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  loading: ExperienceLoading = {
    trabajo:'Loading...' ,
    puesto:'Prendiendo servidor, puede demorar',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }

  exp: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(private experienceServ: ExperienceService) { }

  ngOnInit(): void {
    this.experienceServ.getAllExperiences()
    .subscribe(data =>{
      this.exp = data;
    });
  }

}

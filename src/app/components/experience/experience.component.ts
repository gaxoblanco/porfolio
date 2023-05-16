import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { ExperienceLoading} from '../../models/experienceObj';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  loading: ExperienceLoading = {
    trabajo:'Loading...' ,
    puesto:'Starting the server, wait a few minutes',
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
    setTimeout(() => {
      try {
        // this.experienceServ.getAllExperiences()
        // .subscribe(data =>{
        //   this.exp = data;
        // });
        console.log(dataBase);
        this.exp = dataBase[3].data;
      } catch (error) {

      }
    }, 400);
  }
}

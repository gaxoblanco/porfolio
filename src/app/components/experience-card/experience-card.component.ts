import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience} from '../../models/experienceObj';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience={
    id:'',
    trabajo:'',
    puesto: '',
    description:'',
    ini: '',
    fin: '',
    logo: '',
    url: '',
  };

  constructor(
    private expServ: ExperienceService,
    private ruta:Router
    ) { }

  ngOnInit(): void {
  }

  deleteExp():void{
    this.expServ.deletExperience(this.experience.id)
    .subscribe();
    this.ruta.navigate(['/experience']);
  }

}

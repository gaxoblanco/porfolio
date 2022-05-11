import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience, upExpDTO} from '../../models/experienceObj';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  active: boolean = false;
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
  activeEstady(){
    this.active = !this.active;
  }
  deleteExp():void{
    this.expServ.deletExperience(this.experience.id)
    .subscribe();
    this.ruta.navigate(['/experience']);
  }

  editExp(upexp: upExpDTO):void{
    upexp.id = this.experience.id;

    if(upexp.logo == ''){
      upexp.logo = this.experience.logo
    }
    if(upexp.url == ''){
      upexp.url = this.experience.url
    }
    if(upexp.puesto == ''){
      upexp.puesto = this.experience.puesto
    }
    if(upexp.description == ''){
      upexp.description = this.experience.description
    }
    if(upexp.trabajo == ''){
      upexp.trabajo = this.experience.trabajo
    }
    if(upexp.ini == ''){
      upexp.ini = this.experience.ini
    }
    if(upexp.fin == ''){
      upexp.fin = this.experience.fin
    }
    this.expServ.addNewExp(upexp)
    .subscribe()

  }

}

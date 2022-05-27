import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience, upExpDTO} from '../../models/experienceObj';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;
  more: boolean = false;

  @Input() experience: Experience={
    id:'',
    trabajo:'',
    puesto: '',
    descripcion:'',
    ini: new Date(),
    fin: new Date(),
    logo: '',
    url: '',
  };

  constructor(
    private expServ: ExperienceService,
    private reload : ExperienceComponent,
    private authServ : AutenticacionService,
    ) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }
  activeEstady(){
    this.active = !this.active;
  }
  activeMore(){
    this.more = !this.more;
  }
  deleteExp(){
    this.expServ.deletExperience(this.experience.id)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });
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
    if(upexp.descripcion == ''){
      upexp.descripcion = this.experience.descripcion
    }
    if(upexp.trabajo == ''){
      upexp.trabajo = this.experience.trabajo
    }
    if(upexp.ini == new Date()){
      upexp.ini = this.experience.ini
    }
    if(upexp.fin == new Date()){
      upexp.fin = this.experience.fin
    }
    this.expServ.addNewExp(upexp)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });
  }

}

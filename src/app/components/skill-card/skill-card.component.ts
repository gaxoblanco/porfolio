import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {Skill, UpdateSkillDTO} from '../../models/skillObj';
import {SkillService} from '../../services/skill.service';
import { SkillListComponent } from '../skill-list/skill-list.component';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {


  active: boolean = false;
  logeado: boolean = false;

  @Input() skill: Skill={
    id: '',
    nombre: '',
    descripcion: '',
    url: '',
    logo: '',
  };

  constructor(
    private skillServ: SkillService,
    private ruta:Router,
    private authServ : AutenticacionService,
    public reload: SkillListComponent
    ) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }

   activeOption(){
     this.logeado = !this.logeado;
   }
  activeEstady(){
    this.active = !this.active;
  }
  deletSki():void{
    this.skillServ.deletSkill(this.skill.id)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });
  }

  editSkill(SkillInformation: UpdateSkillDTO):void{
    SkillInformation.id = this.skill.id;

    if(SkillInformation.logo == ''){
      SkillInformation.logo = this.skill.logo
    }
    if(SkillInformation.url == ''){
      SkillInformation.url = this.skill.url
    }
    if(SkillInformation.nombre == ''){
      SkillInformation.nombre = this.skill.nombre
    }
    if(SkillInformation.descripcion == ''){
      SkillInformation.descripcion = this.skill.descripcion
    }
    this.skillServ.addNewSkill(SkillInformation)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });
  }
}

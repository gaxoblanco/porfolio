import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio, UpdateStudyDTO } from 'src/app/models/estudioOBJ';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EstudioService } from 'src/app/services/estudio.service';
import { EstudioComponent } from '../estudio/estudio.component';

@Component({
  selector: 'app-estudio-card',
  templateUrl: './estudio-card.component.html',
  styleUrls: ['./estudio-card.component.scss']
})
export class EstudioCardComponent implements OnInit {

  active: boolean = false;
  logeado: boolean = false;
  more: boolean = false;
  saveDate = '';

  @Input() estudio: Estudio = {
    id:'',
    estudiado:'Loadding',
    institucion: '',
    descripcion:'',
    ini: new Date(),
    fin: new Date(),
    url: '',
    logo: '',
  };

  constructor(
    private studyServ : EstudioService,
    private reload : EstudioComponent,
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

  deletEst():void{
    this.studyServ.deletEstudy(this.estudio.id)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });
  }

  editEstudy(StudyInformation: UpdateStudyDTO):void{
    StudyInformation.id = this.estudio.id;

    if(StudyInformation.logo == ''){
      StudyInformation.logo = this.estudio.logo
    }
    if(StudyInformation.url == ''){
      StudyInformation.url = this.estudio.url
    }
    if(StudyInformation.institucion == ''){
      StudyInformation.institucion = this.estudio.institucion
    }
    if(StudyInformation.estudiado == ''){
      StudyInformation.estudiado = this.estudio.estudiado
    }
    if(StudyInformation.descripcion == ''){
      StudyInformation.descripcion = this.estudio.descripcion
    }
    if(StudyInformation.ini == new Date){
      StudyInformation.ini = this.estudio.ini
      console.log(StudyInformation.ini)
    }
    if(StudyInformation.fin == new Date){
      StudyInformation.fin = this.estudio.fin
    }
    this.studyServ.addNewStudy(StudyInformation)
    .subscribe(()=>{
      this.reload.ngOnInit();
    });

  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio, UpdateStudyDTO } from 'src/app/models/estudioOBJ';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio-card',
  templateUrl: './estudio-card.component.html',
  styleUrls: ['./estudio-card.component.scss']
})
export class EstudioCardComponent implements OnInit {

  active: boolean = false;
  logeado: boolean = false;
  @Input() estudio: Estudio = {
    id:'',
    estudiado:'',
    descripcion:'',
    ini: new Date(),
    fin: new Date(),
    url: '',
    logo: '',
  };

  constructor(
    private studyServ : EstudioService,
    private ruta:Router,
    private authServ : AutenticacionService
    ) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }
  activeEstady(){
    this.active = !this.active;
  }

  deletEst():void{
    this.studyServ.deletEstudy(this.estudio.id)
    .subscribe(() => {
    })
    this.ruta.navigate(['/study']);
  }

  editEstudy(StudyInformation: UpdateStudyDTO):void{
    StudyInformation.id = this.estudio.id;

    if(StudyInformation.logo == ''){
      StudyInformation.logo = this.estudio.logo
    }
    if(StudyInformation.url == ''){
      StudyInformation.url = this.estudio.url
    }
    if(StudyInformation.estudiado == ''){
      StudyInformation.estudiado = this.estudio.estudiado
    }
    if(StudyInformation.descripcion == ''){
      StudyInformation.descripcion = this.estudio.descripcion
    }

    if(StudyInformation.ini == new Date){
      StudyInformation.ini = this.estudio.ini
    }
    if(StudyInformation.fin == new Date){
      StudyInformation.fin = this.estudio.fin
    }
    this.studyServ.addNewStudy(StudyInformation)
    .subscribe()

  }
}

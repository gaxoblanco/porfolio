import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio, UpdateStudyDTO } from 'src/app/models/estudioOBJ';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio-card',
  templateUrl: './estudio-card.component.html',
  styleUrls: ['./estudio-card.component.scss']
})
export class EstudioCardComponent implements OnInit {

  active: boolean = false;
  @Input() estudio: Estudio = {
    id:'',
    Estudio:'',
    descripcion:'',
    ini: '',
    fin: '',
    url: '',
    logo: '',
  };

  constructor(
    private studyServ : EstudioService,
    private ruta:Router
    ) { }

  ngOnInit(): void {
  }
  activeEstady(){
    this.active = !this.active;
  }

  deletEst():void{
    this.studyServ.deletEstudy(this.estudio.id)
    .subscribe(() => {
      console.log("delete")
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
    if(StudyInformation.Estudio == ''){
      StudyInformation.Estudio = this.estudio.Estudio
    }
    if(StudyInformation.descripcion == ''){
      StudyInformation.descripcion = this.estudio.descripcion
    }

    if(StudyInformation.ini == ''){
      StudyInformation.ini = this.estudio.ini
    }
    if(StudyInformation.fin == ''){
      StudyInformation.fin = this.estudio.fin
    }
    this.studyServ.addNewStudy(StudyInformation)
    .subscribe()

  }
}

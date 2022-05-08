import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/models/estudioOBJ';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio-card',
  templateUrl: './estudio-card.component.html',
  styleUrls: ['./estudio-card.component.scss']
})
export class EstudioCardComponent implements OnInit {

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

  deletEst():void{
    this.studyServ.deletEstudy(this.estudio.id)
    .subscribe(() => {
      console.log("delete")
    })
    this.ruta.navigate(['/study']);
  }

}

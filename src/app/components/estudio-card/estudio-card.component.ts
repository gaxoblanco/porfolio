import { Component, Input, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudioOBJ';

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

  constructor() { }

  ngOnInit(): void {
  }

}

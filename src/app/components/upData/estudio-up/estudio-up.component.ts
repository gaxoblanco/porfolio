import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateStudyDTO } from 'src/app/models/estudioOBJ';
import { EstudioCardComponent } from '../../estudio-card/estudio-card.component';

@Component({
  selector: 'app-estudio-up',
  templateUrl: './estudio-up.component.html',
  styleUrls: ['./estudio-up.component.scss']
})
export class EstudioUpComponent implements OnInit {

  StudyDTO : FormGroup;

  constructor( private studyCard: EstudioCardComponent) {
    this.StudyDTO = new FormGroup({
      estudiado: new FormControl(''),
      institucion: new FormControl(''),
      descripcion: new FormControl(''),
      ini: new FormControl(''),
      fin: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  upStudy():void{
    let saveStudy: CreateStudyDTO = this.StudyDTO.value;
    this.studyCard.editEstudy(saveStudy)
  }

}

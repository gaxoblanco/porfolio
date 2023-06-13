import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CreateStudyDTO } from 'src/app/models/estudioOBJ';
import { EstudioCardComponent } from '../../estudio-card/estudio-card.component';

@Component({
  selector: 'app-estudio-up',
  templateUrl: './estudio-up.component.html',
  styleUrls: ['./estudio-up.component.scss']
})
export class EstudioUpComponent implements OnInit {

  StudyDTO : UntypedFormGroup;

  constructor( private studyCard: EstudioCardComponent) {
    this.StudyDTO = new UntypedFormGroup({
      estudiado: new UntypedFormControl(''),
      institucion: new UntypedFormControl(''),
      descripcion: new UntypedFormControl(''),
      ini: new UntypedFormControl(''),
      fin: new UntypedFormControl(''),
      url: new UntypedFormControl(''),
      logo: new UntypedFormControl('')
    })
   }

  ngOnInit(): void {
  }
  upStudy():void{
    let saveStudy: CreateStudyDTO = this.StudyDTO.value;
    this.studyCard.editEstudy(saveStudy)
  }

}

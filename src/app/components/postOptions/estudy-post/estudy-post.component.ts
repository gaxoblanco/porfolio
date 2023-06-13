import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CreateStudyDTO } from 'src/app/models/estudioOBJ';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudy-post',
  templateUrl: './estudy-post.component.html',
  styleUrls: ['./estudy-post.component.scss']
})
export class EstudyPostComponent implements OnInit {

  StudyDTO : UntypedFormGroup;

  constructor( private studyServ: EstudioService) {
    this.StudyDTO = new UntypedFormGroup({
      estudiado: new UntypedFormControl('', Validators.required),
      institucion: new UntypedFormControl('', Validators.required),
      descripcion: new UntypedFormControl('', [Validators.required, Validators.maxLength(76)]),
      ini: new UntypedFormControl('', Validators.required),
      fin: new UntypedFormControl(''),
      url: new UntypedFormControl('', Validators.required),
      logo: new UntypedFormControl('', Validators.required)
    })
   }

  ngOnInit(): void {}

  saveNewEs(){
    let saveStudy: CreateStudyDTO = this.StudyDTO.value;
    this.studyServ.addNewStudy(saveStudy)
    .subscribe(() => {
      this.StudyDTO.reset();
    })
  }
  get Estudiado(){return this.StudyDTO.get('estudiado'); }
  get Institucion(){return this.StudyDTO.get('institucion'); }
  get Descripcion(){return this.StudyDTO.get('descripcion'); }
  get Ini(){return this.StudyDTO.get('ini'); }
  get Url(){return this.StudyDTO.get('url'); }
  get Logo(){return this.StudyDTO.get('logo'); }
}

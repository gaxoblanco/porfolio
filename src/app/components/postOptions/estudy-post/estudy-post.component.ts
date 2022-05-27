import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateStudyDTO } from 'src/app/models/estudioOBJ';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudy-post',
  templateUrl: './estudy-post.component.html',
  styleUrls: ['./estudy-post.component.scss']
})
export class EstudyPostComponent implements OnInit {

  StudyDTO : FormGroup;

  constructor( private studyServ: EstudioService) {
    this.StudyDTO = new FormGroup({
      estudiado: new FormControl('', Validators.required),
      institucion: new FormControl('', Validators.required),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(76)]),
      ini: new FormControl('', Validators.required),
      fin: new FormControl(''),
      url: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {}

  saveNewEs(){
    let saveStudy: CreateStudyDTO = this.StudyDTO.value;
    this.studyServ.addNewStudy(saveStudy)
    .subscribe(() => {
    })
  }
  get Estudiado(){return this.StudyDTO.get('estudiado'); }
  get Institucion(){return this.StudyDTO.get('institucion'); }
  get Descripcion(){return this.StudyDTO.get('descripcion'); }
  get Ini(){return this.StudyDTO.get('ini'); }
  get Url(){return this.StudyDTO.get('url'); }
  get Logo(){return this.StudyDTO.get('logo'); }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      Estudio: new FormControl(''),
      descripcion: new FormControl(''),
      ini: new FormControl(''),
      fin: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
   }

  ngOnInit(): void {}

  saveNewEs(){
    let saveStudy: CreateStudyDTO = this.StudyDTO.value;
    this.studyServ.addNewStudy(saveStudy)
    .subscribe(() => {
      console.log("post")
    })
  }
}

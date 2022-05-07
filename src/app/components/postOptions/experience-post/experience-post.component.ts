import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience.service';
import { CreateExpDTO } from 'src/app/models/experienceObj';
@Component({
  selector: 'app-experience-post',
  templateUrl: './experience-post.component.html',
  styleUrls: ['./experience-post.component.scss']
})
export class ExperiencePostComponent implements OnInit {

  ExpDTO: FormGroup;

  constructor(private expServ: ExperienceService) {
    this.ExpDTO = new FormGroup({
      trabajo: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl(''),
      ini: new FormControl(''),
      fin: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  saveNew(){
    let saveExp: CreateExpDTO = this.ExpDTO.value;
    this.expServ.addNewExp(saveExp)
    .subscribe(newExp => {
      console.log("post")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      trabajo: new FormControl('', Validators.required),
      puesto: new FormControl('', [Validators.required, Validators.maxLength(45)]),
      descripcion: new FormControl('', Validators.required),
      ini: new FormControl('', Validators.required),
      fin: new FormControl(''),
      url: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }

  saveNew(){
    let saveExp: CreateExpDTO = this.ExpDTO.value;
    this.expServ.addNewExp(saveExp)
    .subscribe(() => {
      this.ExpDTO.reset();
    })
  }

  get Trabajo(){return this.ExpDTO.get('trabajo'); }
  get Puesto(){return this.ExpDTO.get('puesto'); }
  get Descripcion(){return this.ExpDTO.get('descripcion'); }
  get Ini(){return this.ExpDTO.get('ini'); }
  get Url(){return this.ExpDTO.get('url'); }
  get Logo(){return this.ExpDTO.get('logo'); }
}

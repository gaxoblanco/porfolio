import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateSkillDTO } from 'src/app/models/skillObj';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill-post',
  templateUrl: './skill-post.component.html',
  styleUrls: ['./skill-post.component.scss']
})
export class SkillPostComponent implements OnInit {

  SkillDTO: FormGroup;


  constructor( private skillservice: SkillService) {
    this.SkillDTO = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(76)]),
      url: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required)
    })
  }

  ngOnInit():void {

  }

  saveNew(){
    let saveSkill: CreateSkillDTO = this.SkillDTO.value;
    this.skillservice.addNewSkill(saveSkill)
    .subscribe(() => {
    })
  }


  get Nombre (){return this.SkillDTO.get('nombre'); }
  get Descripcion(){return this.SkillDTO.get('descripcion'); }
  get Url(){return this.SkillDTO.get('url'); }
  get Logo(){return this.SkillDTO.get('logo'); }
}

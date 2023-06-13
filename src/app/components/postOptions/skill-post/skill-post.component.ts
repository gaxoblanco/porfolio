import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CreateSkillDTO } from 'src/app/models/skillObj';
import { SkillService } from 'src/app/services/skill.service';
import { PostComponent } from '../../post/post.component';

@Component({
  selector: 'app-skill-post',
  templateUrl: './skill-post.component.html',
  styleUrls: ['./skill-post.component.scss']
})
export class SkillPostComponent implements OnInit {

  SkillDTO: UntypedFormGroup;


  constructor( private skillservice: SkillService,
    private  posCom : PostComponent) {
    this.SkillDTO = new UntypedFormGroup({
      nombre: new UntypedFormControl('', [Validators.required, Validators.maxLength(16)]),
      descripcion: new UntypedFormControl('', [Validators.required, Validators.maxLength(76)]),
      url: new UntypedFormControl('', Validators.required),
      logo: new UntypedFormControl('', Validators.required)
    })
  }

  ngOnInit():void {

  }

  saveNew(){
    let saveSkill: CreateSkillDTO = this.SkillDTO.value;
    this.skillservice.addNewSkill(saveSkill)
    .subscribe(() => {
      this.SkillDTO.reset();
    })
  }


  get Nombre (){return this.SkillDTO.get('nombre'); }
  get Descripcion(){return this.SkillDTO.get('descripcion'); }
  get Url(){return this.SkillDTO.get('url'); }
  get Logo(){return this.SkillDTO.get('logo'); }
}

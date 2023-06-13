import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CreateSkillDTO } from 'src/app/models/skillObj';
import { SkillCardComponent } from '../../skill-card/skill-card.component';

@Component({
  selector: 'app-skill-up-data',
  templateUrl: './skill-up-data.component.html',
  styleUrls: ['./skill-up-data.component.scss']
})
export class SkillUpDataComponent implements OnInit {
  SkillDTO: UntypedFormGroup;


  constructor( private SkillCard: SkillCardComponent) {
    this.SkillDTO = new UntypedFormGroup({
      nombre: new UntypedFormControl(''),
      descripcion: new UntypedFormControl('', Validators.maxLength(76)),
      url: new UntypedFormControl(''),
      logo: new UntypedFormControl('')
    })
  }

  ngOnInit(): void {}
  upSkill():void{
    let SkillInformation: CreateSkillDTO = this.SkillDTO.value;
    this.SkillCard.editSkill(SkillInformation)
  }
  get Descripcion(){return this.SkillDTO.get('descripcion'); }
}

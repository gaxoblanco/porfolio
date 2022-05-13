import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateSkillDTO } from 'src/app/models/skillObj';
import { SkillCardComponent } from '../../skill-card/skill-card.component';

@Component({
  selector: 'app-skill-up-data',
  templateUrl: './skill-up-data.component.html',
  styleUrls: ['./skill-up-data.component.scss']
})
export class SkillUpDataComponent implements OnInit {
  SkillDTO: FormGroup;


  constructor( private SkillCard: SkillCardComponent) {
    this.SkillDTO = new FormGroup({
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  upSkill():void{
    let SkillInformation: CreateSkillDTO = this.SkillDTO.value;
    this.SkillCard.editSkill(SkillInformation)
  }
}

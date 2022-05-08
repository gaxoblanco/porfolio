import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
  }

  ngOnInit():void {

  }

  saveNew(){
    console.log("holaaa");
    let saveSkill: CreateSkillDTO = this.SkillDTO.value;
    this.skillservice.addNewSkill(saveSkill)
    .subscribe(() => {
      console.log("post")
    })
  }
}

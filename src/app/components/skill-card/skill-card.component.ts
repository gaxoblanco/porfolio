import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Skill} from '../../models/skillObj';
import {SkillService} from '../../services/skill.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {




  @Input() skill: Skill={
    id: '',
    nombre: '',
    descripcion: '',
    url: '',
    logo: '',
  };

  constructor(
    private skillServ: SkillService,
    private ruta:Router
    ) { }

  ngOnInit(): void {
  }
  deletSki():void{
    this.skillServ.deletSkill(this.skill.id)
    .subscribe(()=>{
      console.log("delete")
      this.ruta.navigate(['/skill']);
    });
  }
}

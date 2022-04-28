import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() deleteSkill = new EventEmitter<Skill>();
  @Output() showSkill = new EventEmitter<string>();

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
  }
  onDelete(){
    this.deleteSkill.emit(this.skill)
  }
  onShowDetail(){
    this.showSkill.emit(this.skill.id)
  }

  traertodos(){

  }
}

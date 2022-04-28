import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Skill} from '../../models/skillObj';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: Skill={
    id:'',
    title:'',
    description:'',
    image: '',
    url: '',
  };

  @Output() deleteSkill = new EventEmitter<Skill>();
  @Output() showSkill = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(){
    this.deleteSkill.emit(this.skill)
  }
  onShowDetail(){
    this.showSkill.emit(this.skill.id)
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience} from '../../models/experienceObj';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {

  @Input() experience: Experience={
    id:'',
    trabajo:'',
    puesto: '',
    description:'',
    ini: '',
    fin: '',
    logo: '',
    url: '',
  };

  @Output() addedExperience = new EventEmitter<Experience>();

  constructor() { }

  ngOnInit(): void {
  }

}

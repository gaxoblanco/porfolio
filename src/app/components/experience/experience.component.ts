import { Component, OnInit } from '@angular/core';
import {Experience} from '../../models/experienceObj';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      id: '1',
      title: 'HTML',
      description: 'texto',
      image: 'sad',
      url: 'asd',
    },
    {
      id: '2',
      title: 'CSS',
      description: 'diseno web',
      image: 'sad',
      url: 'asd',
    },
    {
      id: '3',
      title: 'angular',
      description: 'dise;o web',
      image: 'sad',
      url: 'asd',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

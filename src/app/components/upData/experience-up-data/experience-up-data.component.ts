import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateExpDTO } from 'src/app/models/experienceObj';
import { ExperienceCardComponent } from '../../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-up-data',
  templateUrl: './experience-up-data.component.html',
  styleUrls: ['./experience-up-data.component.scss']
})
export class ExperienceUpDataComponent implements OnInit {

  ExpDTO: FormGroup;

  constructor(private expCard: ExperienceCardComponent) {
    this.ExpDTO = new FormGroup({
      trabajo: new FormControl(''),
      puesto: new FormControl(''),
      descripcion: new FormControl(''),
      ini: new FormControl(''),
      fin: new FormControl(''),
      url: new FormControl(''),
      logo: new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  saveNew(){
    let upExp: CreateExpDTO = this.ExpDTO.value;
    this.expCard.editExp(upExp)
  }

}

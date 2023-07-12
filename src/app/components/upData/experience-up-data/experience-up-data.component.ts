import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { CreateExpDTO } from 'src/app/models/experienceObj';
import { ExperienceCardComponent } from '../../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-up-data',
  templateUrl: './experience-up-data.component.html',
  styleUrls: ['./experience-up-data.component.scss']
})
export class ExperienceUpDataComponent implements OnInit {

  ExpDTO: UntypedFormGroup;

  constructor(private expCard: ExperienceCardComponent) {
    this.ExpDTO = new UntypedFormGroup({
      trabajo: new UntypedFormControl(''),
      puesto: new UntypedFormControl(''),
      descripcion: new UntypedFormControl(''),
      ini: new UntypedFormControl(''),
      fin: new UntypedFormControl(''),
      url: new UntypedFormControl(''),
      logo: new UntypedFormControl('')
    })
   }

  ngOnInit(): void {
  }

  saveNew(){
    let upExp: CreateExpDTO = this.ExpDTO.value;
    // this.expCard.editExp(upExp)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAboutDTO } from 'src/app/models/about';
import { IAmComponent } from '../../about-card/i-am.component';

@Component({
  selector: 'app-about-up-data',
  templateUrl: './about-up-data.component.html',
  styleUrls: ['./about-up-data.component.scss']
})
export class AboutUpDataComponent implements OnInit {

  AboutDTO: FormGroup;

  constructor(private aboutCard: IAmComponent) {
    this.AboutDTO = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      descripcion2: new FormControl('', Validators.maxLength(255)),
      foto: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  saveAbout(){
    let aboutCard: CreateAboutDTO = this.AboutDTO.value;
    this.aboutCard.editAbout(aboutCard)
  }
  get Descripcion (){return this.AboutDTO.get('descripcion'); }
  get Descripcion2 (){return this.AboutDTO.get('descripcion2'); }
}


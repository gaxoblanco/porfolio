import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateAboutDTO, UpAbout } from 'src/app/models/about';
import { IAmComponent } from '../../about-card/i-am.component';

@Component({
  selector: 'app-about-up-data',
  templateUrl: './about-up-data.component.html',
  styleUrls: ['./about-up-data.component.scss']
})
export class AboutUpDataComponent implements OnInit {

  aboutDTO: FormGroup;

  constructor(private aboutCard: IAmComponent) {
    this.aboutDTO = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      foto: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  saveAbout(){
    let aboutCard: CreateAboutDTO = this.aboutDTO.value;
    this.aboutCard.editAbout(aboutCard)
    console.log("post" + this.aboutDTO)
  }
}


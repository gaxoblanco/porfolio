import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateAboutDTO } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  aboutDTO: FormGroup;

  constructor(private aboutServ: AboutService) {
    this.aboutDTO = new FormGroup({
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      foto: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  saveNewAbout(){
    let saveAbout: CreateAboutDTO = this.aboutDTO.value;
    this.aboutServ.addNewAbout(saveAbout).subscribe
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { About, CreateAboutDTO } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  @Input() aboutDTO: FormGroup;

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
    let saveAbout: About = this.aboutDTO.value;
    this.aboutServ.addNewAbout(saveAbout)
    .subscribe(() => {
      console.log("post" + this.aboutDTO)
    })
  }
}

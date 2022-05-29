import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { About, CreateAboutDTO } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  @Input() AboutDTO: FormGroup;

  constructor(private aboutServ: AboutService) {
    this.AboutDTO = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  saveNewAbout(){
    let saveAbout: About = this.AboutDTO.value;
    this.aboutServ.addNewAbout(saveAbout)
    .subscribe(() => {
      this.AboutDTO.reset();
    })
  }
  get Titulo (){return this.AboutDTO.get('titulo'); }
  get Descripcion (){return this.AboutDTO.get('descripcion'); }
  get Foto (){return this.AboutDTO.get('foto'); }

}

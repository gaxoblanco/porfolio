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

  @Input() aboutDTO: FormGroup;

  constructor(private aboutServ: AboutService) {
    this.aboutDTO = new FormGroup({
      titulo: new FormControl('', Validators.required),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(80)]),
      foto: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  saveNewAbout(){
    let saveAbout: About = this.aboutDTO.value;
    this.aboutServ.addNewAbout(saveAbout)
    .subscribe(() => {})
  }
  get Titulo (){return this.aboutDTO.get('titulo'); }
  get Descripcion (){return this.aboutDTO.get('descripcion'); }
  get Foto (){return this.aboutDTO.get('foto'); }

}

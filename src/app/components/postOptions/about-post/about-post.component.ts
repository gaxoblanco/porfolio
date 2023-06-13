import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { About, CreateAboutDTO } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-post',
  templateUrl: './about-post.component.html',
  styleUrls: ['./about-post.component.scss']
})
export class AboutPostComponent implements OnInit {

  @Input() AboutDTO: UntypedFormGroup;

  constructor(private aboutServ: AboutService) {
    this.AboutDTO = new UntypedFormGroup({
      titulo: new UntypedFormControl('', Validators.required),
      descripcion: new UntypedFormControl('', [Validators.required, Validators.maxLength(255)]),
      descripcion2: new UntypedFormControl('', Validators.required),
      foto: new UntypedFormControl('', Validators.required)
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

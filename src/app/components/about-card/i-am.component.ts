import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss']
})
export class IAmComponent implements OnInit {

  @Input() about: About = {
    id: '',
    titulo: '',
    descripcion: '',
    foto: '',
  };

  constructor(
    private aboutServ: AboutService,
    private ruta:Router) { }

  ngOnInit(): void {
  }

  deleteAbo():void{
    this.aboutServ.deleteAbout(this.about.id)
    .subscribe(() =>{
      console.log("delete")
    })
    this.ruta.navigate(['/about']);
  }

}

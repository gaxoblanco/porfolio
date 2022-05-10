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
  active: boolean = false;

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

  activeEstady(){
    this.active = !this.active;
  }

  deleteAbo():void{
    this.aboutServ.deleteAbout(this.about.id)
    .subscribe(() =>{
      console.log("delete")
    })
    this.ruta.navigate(['/about']);
  }
  editAbout():void{
    this.aboutServ.addNewAbout(this.about)

    .subscribe(() => {
      console.log("post")
     console.log(this.about.id)
    })
  }

}

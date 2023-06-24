import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { About, UpAbout } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { AboutComponent } from '../about/about.component';



@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss'],
  animations: [
    trigger('fadeIn_iam', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%) translateY(-100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0) translateY(0)' }))
      ])
    ]),
    trigger('fadeIn_link', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn_language', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%) translateY(-100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0) translateY(0)' }))
      ])
    ]),
    trigger('fadeIn_speak', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeIn_program', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
  ]
})
export class IAmComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;
  @Input() about: About = {
    id: '',
    titulo: '',
    descripcion: '',
    descripcion2: '',
    foto: '',
  };

  constructor(
    private aboutServ: AboutService,
    private authServ : AutenticacionService,
    private aboCompo : AboutComponent) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }

  activeEstady(){
    this.active = !this.active;
  }

  deleteAbo():void{
    this.aboutServ.deleteAbout(this.about.id)
    .subscribe(()=>{
      this.aboCompo.ngOnInit();
    });
  }
  editAbout(DatoaSubir: UpAbout):void{
    DatoaSubir.id = this.about.id;
    if(DatoaSubir.foto == ''){
      DatoaSubir.foto = this.about.foto
    }
    if(DatoaSubir.titulo == ''){
      DatoaSubir.titulo = this.about.titulo
    }
    if(DatoaSubir.descripcion == ''){
      DatoaSubir.descripcion = this.about.descripcion
    }
    if(DatoaSubir.descripcion2 == ''){
      DatoaSubir.descripcion2 = this.about.descripcion2
    }
    this.aboutServ.addNewAbout(DatoaSubir)
    .subscribe(()=>{
      this.aboCompo.ngOnInit();
    });
  }
  paginationMenos(){
    this.aboCompo.RestarPagina();
  }
  paginationMas(){
    this.aboCompo.SumarPagina();
  }

}

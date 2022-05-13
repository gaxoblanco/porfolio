import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About, UpAbout } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { AboutComponent } from '../about/about.component';



@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss']
})
export class IAmComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;
  @Input() about: About = {
    id: '',
    titulo: '',
    descripcion: '',
    foto: '',
  };

  constructor(
    private aboutServ: AboutService,
    private ruta:Router,
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
    .subscribe(() =>{
    })
    this.ruta.navigate(['/about']);
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
    this.aboutServ.addNewAbout(DatoaSubir)
    .subscribe()
  }
  paginationMenos(){
    this.aboCompo.RestarPagina();
  }
  paginationMas(){
    this.aboCompo.SumarPagina();
  }

}

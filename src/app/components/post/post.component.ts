import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  logeado: boolean = false;
  active: any = [
    {activeEst : false},
    {activeExp : false},
    {activeSki : false},
    {activeAbo : false}
  ];

  isActiv = this.active.every((item: boolean) => item <= false)




  constructor(
    private authServ : AutenticacionService,
    private ruta:Router) { }


  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    } else{
      this.ruta.navigate(['/home']);
    }
  }
  activeEstudy(){
    if (this.isActiv == true){
      this.active.forEach((activ: boolean) =>{
        activ = false;
      })
    } else{
      this.active.activeEst = !this.active.activeEst;
    }

  }

  activeExperience(){
    this.active.activeExp = !this.active.activeExp;
  }
  activeSkill(){
    this.active.activeSki = !this.active.activeSki;
  }
  activeAbout(){
    this.active.activeAbo = !this.active.activeAbo;
  }
}

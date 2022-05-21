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
    const alguno = this.active.filter((item: boolean) => item)
    this.activeSkill()

  }
  activeEstudy(){
    this.desactivate();
    this.active.activeEst = !this.active.activeEst;
  }
  activeExperience(){
    this.desactivate();
    this.active.activeExp = !this.active.activeExp;
  }
  activeSkill(){
    this.desactivate();
    this.active.activeSki = !this.active.activeSki;
  }
  activeAbout(){
    this.desactivate();
    this.active.activeAbo = !this.active.activeAbo;
  }
  desactivate(){
    this.active.activeEst = false;
    this.active.activeExp = false;
    this.active.activeSki = false;
    this.active.activeAbo = false;
  }
}

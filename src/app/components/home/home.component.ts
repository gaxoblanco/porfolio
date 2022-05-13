import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logeado: boolean = false;

   saludos = [
    "Hola",
    "Hello",
    "こんにちは",
    "Salut",
    "你好",
    "Ciao",
    "안녕하세요"
  ]

  SALUDO = '';

  constructor(private authServ : AutenticacionService) {

  }

  ngOnInit(): void {
    const time$ = interval(2000);
    time$.subscribe(() =>{
      //funcion length saca cuanto elementos tiene y random usa eso.
    let saludoRandom = Math.floor(Math.random()*this.saludos.length);
      //segun la posicion traigo el saludo
    let  nSaludo = this.saludos[saludoRandom];
      //imprimo el saludo
    this.SALUDO = nSaludo;
      return this.SALUDO;
    })
  }

}

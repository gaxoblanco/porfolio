import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  openLogin: boolean = false;
  closeLogin: boolean = false;
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
    });

    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado;
      this.isLogeado();
    }
  }
  activeEstady(){
    if (this.closeLogin == false) {
      this.openLogin = !this.openLogin;
    }
  }
  isLogeado(){
    if(this.logeado == true){
      this.closeLogin = !this.closeLogin;
    }
   }
  disconect(){
   // this.authServ.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
   this.authServ.disconection();
   this.ngOnInit();
  }

}

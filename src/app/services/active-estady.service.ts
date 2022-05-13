import { Injectable } from '@angular/core';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveEstadyService {

  active: boolean = false;
  option: boolean = false;

  constructor(private authServ : AutenticacionService,) { }

   logeadoIs() {
     if (this.authServ.UsuarioAutenticado == true){
       return this.option = this.authServ.UsuarioAutenticado
     }
  }
  activeEdit(){
    return this.active = !this.active;
  }
}

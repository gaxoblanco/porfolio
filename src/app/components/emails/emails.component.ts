import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  logeado: boolean = false;

  mensaje: any = [];

  constructor(
    private emailServ : EmailService,
    private authServ : AutenticacionService,
    private ruta:Router) { }

  ngOnInit(): void {
    this.emailServ.getAllEmails()
    .subscribe(data =>{
      this.mensaje = data;
    })
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }else{
      this.ruta.navigate(['/home']);
    }
  }

}

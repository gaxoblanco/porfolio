import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from 'src/app/models/emailObj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-emails-card',
  templateUrl: './emails-card.component.html',
  styleUrls: ['./emails-card.component.scss']
})
export class EmailsCardComponent implements OnInit {

  logeado: boolean = false;

  @Input() email: Email = {
    nombre: '',
    email: '',
    mensaje: '',
    fecha: new Date(),
  }

  constructor(
    private ruta : Router,
    private emailServ : EmailService,
    private authServ : AutenticacionService) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }
  deletEst():void{
    this.emailServ.deletEmail(this.email.id)
    .subscribe(() => {
    })
  }
}

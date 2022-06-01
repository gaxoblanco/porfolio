import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateEmailDTO, Email } from 'src/app/models/emailObj';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  fechaActual: Date = new Date;
 // pdf: CV\src\assets\CV Gaston-Blanco.pdf


@Input() emailListo: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private emailSer : EmailService,
      private ruta:Router) {
      this.emailListo = this.formBuilder.group({
        nombre: ['',[Validators.required, Validators.minLength(5)]],
        email: ['',[Validators.required,Validators.pattern(this.emailRegex)]],
        mensaje: ['',[Validators.required,Validators.minLength(10)]],
        fecha: this.fechaActual,
      });
    }

  ngOnInit(): void {
    let output =
      String(this.fechaActual.getDate()).padStart(2, '0') + '/' +
      String(this.fechaActual.getMonth() + 1).padStart(2, '0') + '/' + this.fechaActual.getFullYear();
  }

  enviarEmail(){
    if(this.emailListo.valid){
      let email: CreateEmailDTO = this.emailListo.value;
      this.emailSer.addNewEmail(email)
    .subscribe()
    this.ruta.navigate(['/home']);
    }else{
    }
  }
  abrirPDF(){
    this.ruta.navigate(['/GastonBlanco']);
  }
  get Nombre(){return this.emailListo.get('nombre'); }
  get Email(){return this.emailListo.get('email'); }
  get Mensaje(){return this.emailListo.get('mensaje'); }
}

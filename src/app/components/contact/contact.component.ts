import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from 'src/app/models/emailObj';
import { EmailService } from 'src/app/services/email.service';
import { Contact} from '../../models/formObj'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

@Input() emailListo: FormGroup;

  constructor(private emailSer : EmailService,
              private ruta:Router) {
    this.emailListo = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
    })
  }


  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.emailListo);
  }

  enviarEmail(){
    let email: Email = this.emailListo.value;
    this.emailSer.addNewEmail(email)
    .subscribe()
    console.log(email);
    this.ruta.navigate(['/home']);
  }
}

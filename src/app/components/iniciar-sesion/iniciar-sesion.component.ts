import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AutenticacionService} from '../../services/autenticacion.service';
import { LoginObj } from 'src/app/models/user.model';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;

  constructor(
    private loginActive : HomeComponent,
    private formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService) {
    this.form = this.formBuilder.group({
        id: [''],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onEnviar(event:Event){
    let conectar: LoginObj = this.form.value;
    event.preventDefault;
    this.autenticacionService.IniciarSesion(conectar).subscribe(()=>{
      this.loginActive.activeEstady();
      console.log("se envia pero vuelve?")
    })

  }

}

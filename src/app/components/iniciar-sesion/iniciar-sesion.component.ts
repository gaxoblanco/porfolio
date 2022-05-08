import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AutenticacionService} from '../../services/autenticacion.service';
import {Router} from '@angular/router';
import { LoginObj } from 'src/app/models/user.model';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  form:FormGroup;

  constructor(private formBuilder: FormBuilder,
              private autenticacionService: AutenticacionService,
              private ruta:Router) {
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
    this.autenticacionService.IniciarSesion(conectar).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/home']);
      console.log("Te lograste conectar sin problemas")
    })
  }

}

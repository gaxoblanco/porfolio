import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginObj } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private url = `${environment.API_URL}`;

  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servicio de autenticaciones esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')|| '{}'));
  }

  IniciarSesion(credenciales:LoginObj):Observable<any>{
    return this.http.post(this.url + "login", credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }
}

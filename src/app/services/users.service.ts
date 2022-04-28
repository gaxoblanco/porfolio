import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from './../../environments/environment';

import {User, CreateUserDTO} from './../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url:string="http://localhost:8080/";
 // private Url = `${environment.API_URL}/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO){
    return this.http.post<User>(this.url + "new/user", dto);
  }
//getAll
  obtenerDatos():Observable<any>{
    return this.http.get<User>(this.url + "ver/users");
  }

}

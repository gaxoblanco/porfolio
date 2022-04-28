import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from './../../environments/environment';

import {User, CreateUserDTO} from './../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = `${environment.API_URL}`;

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

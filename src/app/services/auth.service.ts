import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from './../../environments/environment';
import {Auth} from './../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private Url = `${environment.API_URL}`;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string){
    return this.http.post<Auth>(this.Url + "login", {email, password})
  }

  profile(){
    return this.http.get(`${this.Url}profile`)
  }
}

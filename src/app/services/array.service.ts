import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//url global
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  private url = `${environment.API_URL}`;

  constructor(
    private http:HttpClient
  ) { }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private url = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllAbouts():Observable<About[]>{
    return this.http.get<About[]>(this.url + "ver/about");
  }
}

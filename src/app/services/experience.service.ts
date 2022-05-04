import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experienceObj';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private url = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllExperiences():Observable<Experience[]>{
    return this.http.get<Experience[]>(this.url + "ver/experiencia");
  }
}

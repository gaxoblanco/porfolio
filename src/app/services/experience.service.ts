import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateExpDTO, Experience } from '../models/experienceObj';
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

  addNewExp(expDTO: CreateExpDTO): Observable<Experience>{
    return this.http.post<Experience>(this.url + "new/experiencia", expDTO)
  }
  deletExperience(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/experiencia/" +` ${id}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
//url global
import {environment} from './../../environments/environment';

import {Skill, CreateSkillDTO, UpdateSkillDTO} from './../models/skillObj';

import {Experience} from './../models/experienceObj';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  private url = `${environment.API_URL}`;

  constructor(
    private http:HttpClient
  ) { }
  getAllExperiencias(){
    return this.http.get<Experience[]>(this.url + 'ver/experiencia');
  }

  getSkill(id: string){
    return this.http.get<Skill[]>(`${this.url}/${id}`);
  }
  create(dto: CreateSkillDTO){
    return this.http.post<Skill>(this.url, dto);
  }
  update(id: string, dto: UpdateSkillDTO){
    return this.http.put<Skill>(`${this.url}/${id}`, dto);
  }
  delete(id: string){
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}

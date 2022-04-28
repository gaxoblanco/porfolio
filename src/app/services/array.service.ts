import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from './../../environments/environment';

import {Skill, CreateSkillDTO, UpdateSkillDTO} from './../models/skillObj';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  private Url = `${environment.API_URL}/api/products`;

  constructor(
    private http:HttpClient
  ) { }
  getAllSkills():Observable<any>{
    return this.http.get('./data/skill.data.json');
  }

  getSkill(id: string){
    return this.http.get<Skill[]>(`${this.Url}/${id}`);
  }
  create(dto: CreateSkillDTO){
    return this.http.post<Skill>(this.Url, dto);
  }
  update(id: string, dto: UpdateSkillDTO){
    return this.http.put<Skill>(`${this.Url}/${id}`, dto);
  }
  delete(id: string){
    return this.http.delete<boolean>(`${this.Url}/${id}`);
  }
}

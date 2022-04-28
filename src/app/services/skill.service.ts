import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skillObj';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string = "localhost:8080/";

  constructor(private http: HttpClient) { }

  getAllSkills(){
    return this.http.get<Skill[]>(this.url + "ver/skill");
  }

  getSkill(){
    return this.http.get<Skill>(this.url + "");
  }
}

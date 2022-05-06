import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skill } from '../models/skillObj';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string = `${environment.API_URL}`;
  //  url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getAllSkills(){
    return this.http.get<Skill[]>(this.url + "ver/skill");
  }

  deleteSkill(){
    return this.http.delete<boolean>(this.url + "delete/skill/"); //+ `${id}`
  }
}

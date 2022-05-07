import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSkillDTO, Skill } from '../models/skillObj';


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

  addNewSkill(skillDto: CreateSkillDTO):Observable<Skill>{
    return this.http.post<Skill>(this.url + "new/skill", skillDto) //falta configurar el header
  }
}

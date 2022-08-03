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

  constructor(private http: HttpClient) { }

  getAllSkills(){
    return this.http.get<Skill[]>(this.url + "ver/skil");
  }

  addNewSkill(saveSkill: CreateSkillDTO):Observable<Skill>{
    return this.http.post<Skill>(this.url + "new/skill", saveSkill) //falta configurar el header
  }
  deletSkill(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/skill/" + `${id}`);
  }
}

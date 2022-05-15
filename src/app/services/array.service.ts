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


}

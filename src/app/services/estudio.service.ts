import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {CreateStudyDTO, Estudio} from '../models/estudioOBJ';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  private url = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllEstudios():Observable<Estudio[]>{
    return this.http.get<Estudio[]>(this.url + "ver/estudio");
  }
  addNewStudy(studyDto: CreateStudyDTO): Observable<Estudio>{
    return this.http.post<Estudio>(this.url + "new/estudio", studyDto);
  }
  deletEstudy(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/estudio/" +`${id}`)
  }
}

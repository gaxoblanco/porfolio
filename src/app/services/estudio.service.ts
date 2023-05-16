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

  // getAllEstudios():Observable<any[]>{
  //   return this.http.get<Estudio[]>(this.url + "ver/estudio");
  // }

  getAllEstudios():Observable<any[]>{
    return this.http.get<Estudio[]>('../data/study.json');
  }

  // getAllEstudios(){
  //   const esty = [
  //     {id: 'String',
  //       estudiado: 'String',
  //       institucion: 'String',
  //       descripcion: 'String',
  //       ini: '16/05',
  //       fin: '16/05/2023',
  //       url: 'String',
  //       logo: 'String'},
  //       {id: 'String2',
  //       estudiado: 'String',
  //       institucion: 'String',
  //       descripcion: 'String',
  //       ini: '16/05',
  //       fin: '16/05/2023',
  //       url: 'String',
  //       logo: 'String'}
  //   ];
  //   return esty
  // }

  addNewStudy(studyDto: CreateStudyDTO): Observable<Estudio>{
    return this.http.post<Estudio>(this.url + "new/estudio", studyDto);
  }
  deletEstudy(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/estudio/" +`${id}`)
  }
}

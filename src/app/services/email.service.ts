import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CreateEmailDTO, Email } from '../models/emailObj';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllEmails():Observable<Email[]>{
    return this.http.get<Email[]>(this.url + "ver/email");
  }
  addNewEmail(studyDto: CreateEmailDTO): Observable<Email>{
    return this.http.post<Email>(this.url + "new/email", studyDto);
  }
  deletEmail(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/email/" +`${id}`)
  }
}

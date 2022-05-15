import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ruta } from '../models/rout-Obj';


@Injectable({
  providedIn: 'root'
})
export class RoutService {

  rutaActual: Ruta = {
    nombre: '',
    ruta: '',
    descripcion: '',
  };


  url: string = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllRout(){
    return this.http.get<Ruta[]>(this.url + "ver/rout");
  }

  editRout(saveRout: Ruta):Observable<Ruta>{
    return this.http.post<Ruta>(this.url + "new/rout", saveRout)
  }
  deletRout(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/rout/" + `${id}`);
  }

}

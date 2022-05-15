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

  private rutaActual$ = new BehaviorSubject<Ruta>(this.rutaActual)

  url: string = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getAllRout(){
    return this.http.get<Ruta[]>(this.url + "ver/rout");
  }

  editRout(saveSkill: Ruta):Observable<Ruta>{
    return this.http.post<Ruta>(this.url + "new/rout", saveSkill) //falta configurar el header
  }
  deletRout(id: any):Observable<{}>{
    return this.http.delete<{}>(this.url + "delete/rout/" + `${id}`);
  }

  get selecRuta$():Observable<Ruta>{
    return this.rutaActual$.asObservable();
  }
  setRuta(ruta:Ruta):void{
    this.rutaActual$.next(ruta);
  }
}

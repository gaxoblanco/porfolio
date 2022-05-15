import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;

  PRutas : Ruta[] = [
  ];

  actual : any = {
    url: '',
    nombre: '',
  };
  PrintRuta : Ruta = {
    ruta: '',
    nombre: '',
    descripcion: '',
  }
  @Input() headerData: Ruta = {};

  constructor(
    private authServ : AutenticacionService,
    private actiRout : ActivatedRoute,
    private routSer : RoutService) { }

  ngOnInit(): void {
    this.actual = this.actiRout
    this.routSer.getAllRout()
    .subscribe(data =>{
      this.PRutas = data;
      this.array();
    })

    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }
  array(){
  //guardamos el valor de actiRout - url y lo filtramos con el array de routSer
    const rutaFiltrada = this.PRutas.filter(PRutas => PRutas.ruta == this.actual._routerState.snapshot.url)
    //iteramos para guardarlo en el objeto
    this.PrintRuta = (rutaFiltrada[0]);
  }
  activeEstady(){
    this.active = !this.active;
  }

  editRout(DataRout: Ruta):void{
    DataRout.id = this.PrintRuta.id;
    DataRout.ruta = this.PrintRuta.ruta;
    DataRout.acess = this.PrintRuta.acess;

    if(DataRout.nombre == ''){
      DataRout.nombre = this.PrintRuta.nombre
    }
    if(DataRout.descripcion == ''){
      DataRout.descripcion = this.PrintRuta.descripcion
    }
    this.routSer.editRout(DataRout)
    .subscribe(()=>{
      this.ngOnInit();
    });
  }

}

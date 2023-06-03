import { Component, Input, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;
  public searchValue: string | null = null;

  // PRutas : Ruta[] = [];
  PRutas : any = [];

  actual : any = {
    url: '',
    nombre: '',
  };
  PrintRuta : Ruta = {
    ruta: '',
    nombre: 'Loading...',
    descripcion: 'Starting the server, wait a few minutes',
  }
  @Input() headerData: Ruta = {};

  constructor(
    private authServ : AutenticacionService,
    private actiRout : ActivatedRoute,
    private routSer : RoutService) { }
  log = false;
  ngOnInit(): void {
    this.actual = this.actiRout
    // this.routSer.getAllRout()
    // .subscribe(data =>{
    //   this.PRutas = data;
    //   this.array();
    // })

    setTimeout(() => {
      try {
        if (this.log == true) {
          this.PRutas = dataBase[5].data;
          this.array();
        } else {
          const dataFilter : any = this.PRutas = dataBase[5].data;
          this.PRutas = dataFilter;
          this.array();
        }
      } catch (error) {
        console.error(error);
      }
    }, 400);

    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
  }
  array(){
  //guardamos el valor de actiRout - url y lo filtramos con el array de routSer
  const rutaFiltrada = this.PRutas.filter((r : Ruta) => r.ruta === this.actual._routerState.snapshot.url);
  // Iteramos para guardar el resultado en el objeto
  this.PrintRuta = rutaFiltrada[0];

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

  // changeImage(iconName: string) {
  //   const element = document.querySelector('.icon_' + iconName) as HTMLElement;
  //   this.renderer.setStyle(element, 'background-image', 'url("../../../assets/icons/' + iconName + '_hover.svg")');
  // }

  // restoreImage(iconName: string) {
  //   const element = document.querySelector('.icon_' + iconName) as HTMLElement;
  //   this.renderer.setStyle(element, 'background-image', 'url("../../../assets/icons/' + iconName + '.svg")');
  // }

  //filter
  filterEst(): string | null {
    return this.searchValue;
  }

}

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';


//---services
import { SearchService } from '../../search-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
  active: boolean = false;
  logeado: boolean = false;
  public searchValue: string = '';
  // public searchValue: string | null = null;

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

  @ViewChild('searchInput', { static: false }) searchInputRef!: ElementRef;
  @ViewChild('subMenu', { static: false }) subMenuRef!: ElementRef;


  constructor(
    private authServ : AutenticacionService,
    private actiRout : ActivatedRoute,
    private routSer : RoutService,
    private searchService: SearchService) { }
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

    //submenu animation
    subMenuHeight = '0px';
subMenuState = false;
  handelSubMenu() {
    this.subMenuState = !this.subMenuState;
    const subMenu = document.querySelector('.submenu-container') as HTMLElement;
    const computedHeight = window.getComputedStyle(subMenu).getPropertyValue('height');
    setTimeout(() => {
      this.subMenuHeight = this.subMenuHeight === '0px' ? computedHeight : '0px';
    }, 10);
  }



  //filter
  filterEst() {
    this.searchService.setSearchValue(this.searchValue);
    this.searchValue = '';
    this.searchInputRef.nativeElement.blur();
    this.subMenuRef.nativeElement.blur();
  }
  killOpenClass() {
    if (this.subMenuRef) {
      this.subMenuRef.nativeElement.classList.remove('open');
    }
  }

}

import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';

import { ColorStateService } from '../../color-state.service';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';


//---services
import { SearchService } from '../../search-service.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  colorState: string = '';
  active: boolean = false;
  logeado: boolean = false;
  public searchText: string = '';
  searching: boolean = false;

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
    private colorStateService: ColorStateService,
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

    // if (this.authServ.UsuarioAutenticado == true){
    //   this.logeado = this.authServ.UsuarioAutenticado
    // }

    //set colors state
    this.colorStateService.colorSubject.subscribe((color: string) => {
      this.colorState = color;
      console.log("color", this.colorState);
    });
  }

  //--- Filtramos la ruta actual del menu de navegacion
  array(){
  //guardamos el valor de actiRout - url y lo filtramos con el array de routSer
  const rutaFiltrada = this.PRutas.filter((r : Ruta) =>
    r.ruta === this.actual._routerState.snapshot.url);
  // Iteramos para guardar el resultado en el objeto
  this.PrintRuta = rutaFiltrada[0];
  }


  //---animations
    subMenuState = false;
    filterState = false;
    navigationDelay = false;
  handelSubMenu() {
    this.subMenuState = !this.subMenuState;
    this.filterState = false;
    if (this.subMenuState == false) {
      setTimeout(() => {
        this.navigationDelay = !this.navigationDelay;
      }, 1000);
    } else {
      this.navigationDelay = !this.navigationDelay;
    }
  }
  killOpenClass() {
    if (this.subMenuRef) {
      this.subMenuRef.nativeElement.classList.remove('open');
    }
  }


  //-filter open
  filterOpen() {
    //cambio el estado de filterState
    this.filterState = !this.filterState;
    this.subMenuState = false;
    //si paso a true, espero y ahago focus
    if (this.filterState == true) {
      setTimeout(() => {
        this.searchInputRef.nativeElement.focus();
      }, 1600);
    }
  }


  //--- filter fuction
  filterEst() {
    if (this.searchText && this.searchText.trim() !== '') {
      //envio el valor a search()
      this.searchService.setSearchValue(this.searchText);
      //limpio el valor de searchText
      this.searchText = ''
      //quito el .focus del search
      this.searchInputRef.nativeElement.blur();
      //escondo el input
      this.filterState = !this.filterState;
      //muetro una X para cancelar el filtrado
      this.searching = true;
    }
  }

  //cancel filter
  cancelSearching() {
    this.searching = !this.searching;
    this.searchService.setSearchValue('');
  }

}

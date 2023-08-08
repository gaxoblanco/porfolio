import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

import { ColorStateService } from '../../color-state.service';
import { Ruta } from 'src/app/models/rout-Obj';
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
  currentRoute!: string;
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

  nowURL: string = '';

  @Input() headerData: Ruta = {};

  @ViewChild('searchInput', { static: false }) searchInputRef!: ElementRef;
  @ViewChild('subMenu', { static: false }) subMenuRef!: ElementRef;


  constructor(
    private actiRout : ActivatedRoute,
    private colorStateService: ColorStateService,
    private searchService: SearchService,
    private router: Router) {  }
  log = false;
  ngOnInit(): void {
    this.actual = this.actiRout

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

    //set colors state
    this.colorStateService.colorSubject.subscribe((color: string) => {
      this.colorState = color;
    });

    // Suscripción al evento NavigationEnd
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.nowURL = this.actual._futureSnapshot._routerState.url
        this.array();
      }
    });
  }

  //--- Filtramos la ruta actual del menu de navegacion
  array() {
    if (this.actual && this.PRutas && this.PRutas.length > 0) {
      const rutaFiltrada = this.PRutas.find((r: Ruta) => r.ruta === this.nowURL);
      if (rutaFiltrada) {
        this.PrintRuta = rutaFiltrada;
      } else {
        this.PrintRuta = {
          ruta: '',
          nombre: 'Not Found',
          descripcion: 'The route was not found in the PRutas array.',
        };
      }
    }
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
      this.subMenuState = !this.subMenuState;
      setTimeout(() => {
        this.navigationDelay = !this.navigationDelay;
      }, 2000);
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
    //limpio el valor de searchText
    this.searchText = ''
    //escondo el input
    this.filterState = false;
  }

}

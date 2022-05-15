import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ruta } from 'src/app/models/rout-Obj';
import { RoutService } from 'src/app/services/rout-.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  headerT: Ruta = {
    nombre: '',
    ruta: '',
    descripcion: '',
  };

  constructor(
    private routSer : RoutService) { }

  ngOnInit(): void {
    this.routSer.selecRuta$.subscribe((ruta: Ruta) => this.headerT = ruta)
    console.log("buen dia madrugador " + this.headerT.ruta)
  }
  pageTitle(){
  }

}

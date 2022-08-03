import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  loading: Ruta={
    nombre: 'Loading...',
    ruta: '',
    logo: 'https://i.imgur.com/ITNhgTu.png',
  }

  @Input() page: Ruta={
    nombre: '',
    ruta: '',
    logo: '',
  }
  @Output() addedPage = new EventEmitter<Ruta>();

  rutaA: Ruta = {};
  pages: Ruta[] =[
    this.loading,
    this.loading,
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    public routSer : RoutService,
    public navCom :NavBarComponent,
    public authServ : AutenticacionService) { }

  ngOnInit(): void{
    this.routSer.getAllRout()
    .subscribe(data =>{
      if (this.authServ.UsuarioAutenticado == true){
        this.pages = data;
      }else{
        this.pages = data.filter(item => item.acess)
      }
    });


  }

  ClickAlert(){
    this.navCom.toggleMenu();
  }

}

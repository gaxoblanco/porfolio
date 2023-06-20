import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ruta } from 'src/app/models/rout-Obj';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { RoutService } from 'src/app/services/rout-.service';
import { FooterComponent } from '../footer/footer.component';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  loading: Ruta = {
    nombre: 'Loading...',
    ruta: '',
    logo: 'https://i.imgur.com/ITNhgTu.png',
  };

  @Input() page: Ruta = {
    nombre: '',
    ruta: '',
    logo: '',
  };
  @Output() addedPage = new EventEmitter<Ruta>();

  rutaA: Ruta = {};
  pages: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    public routSer: RoutService,
    public footer_: FooterComponent,
    public authServ: AutenticacionService
  ) {}

  ngOnInit(): void {
    // this.routSer.getAllRout()
    // .subscribe(data =>{
    //   if (this.authServ.UsuarioAutenticado == true){
    //     // this.pages = data;
    //     this.pages = dataBase[5].data;
    //   }else{
    //     this.pages = data.filter(item => item.acess)
    //   }
    // });

    setTimeout(() => {
      try {
        if (this.authServ.UsuarioAutenticado == true) {
          this.pages = dataBase[5].data;
        } else {
          const dataFilter : any = this.pages = dataBase[5].data;
          this.pages = dataFilter.filter((item : Ruta) => item.acess == '1');
        }
      } catch (error) {
        console.error(error);
      }
    }, 400);
  }

  ClickAlert() {
    this.footer_.toggleMenu();
  }
}

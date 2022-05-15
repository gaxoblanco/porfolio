import { Component, EventEmitter, Output } from '@angular/core';
import { HeadComponent } from './components/head/head.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Ruta } from './models/rout-Obj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CV';

  @Output()paginaActual = new EventEmitter<Ruta>();
  constructor(
   // private ruterMo : HeadComponent
    ) { }

}

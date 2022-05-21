import { Component, EventEmitter, Output } from '@angular/core';
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

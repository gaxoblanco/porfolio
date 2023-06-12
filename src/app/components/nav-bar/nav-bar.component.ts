import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ruta } from 'src/app/models/rout-Obj';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  activeMenu = false;
  //oculta o muestra el footer.
  isScrolled: boolean = false;

@HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const scrollThreshold = 100;
  const scrollUpThreshold = 400;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Verifica si el scroll ha llegado al final de la página
  const isAtEndOfPage = scrollPosition + windowHeight >= documentHeight;

  // Actualiza la variable isScrolled basado en la posición del scroll
  this.isScrolled = (scrollPosition > scrollThreshold && !isAtEndOfPage) || (scrollPosition < scrollUpThreshold && scrollPosition > 0);
}


  @Output() addedPage = new EventEmitter<Ruta>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
  // clouseMenu(){
  //   this.activeMenu = false;
  // }

  blindnessState = false;
  handelBlindness():void {
    this.blindnessState = !this.blindnessState;

    setTimeout(() => {
      this.blindnessState = false;
    }, 6000);
  }

}

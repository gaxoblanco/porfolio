import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ruta } from 'src/app/models/rout-Obj';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  activeMenu = false;

  @Output() addedPage = new EventEmitter<Ruta>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

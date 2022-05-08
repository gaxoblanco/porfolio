import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../models/pagesObjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  activeMenu = false;

  contact: Page={
    title: 'Contact',
      link: '/contact',
  }

  @Output() addedPage = new EventEmitter<Page>();

  pages: Page[] =[

    {
      title: 'Contact',
      link: '/about',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

}

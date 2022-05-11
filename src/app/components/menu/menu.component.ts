import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Page} from '../../models/pagesObjs';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() page: Page={
    title: '',
    link: '',
  }

  @Output() addedPage = new EventEmitter<Page>();

  pages: Page[] =[
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Experiences',
      link: '/experience',
    },
    {
      title: 'Studies',
      link: '/study',
    },
    {
      title: 'Skill',
      link: '/skill',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Contact',
      link: '/contact',
    },

  ]
  constructor(private navCom :NavBarComponent) { }

  ngOnInit(): void {
  }
  onAddPageList(){
    this.addedPage.emit(this.page);
  }
  ClickAlert(){
    this.navCom.toggleMenu();
  }

}

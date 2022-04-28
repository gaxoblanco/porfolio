import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Page} from '../../models/pagesObjs';

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
      link: '<app-home></app-home>',
    },
    {
      title: 'Experiences',
      link: '<app-experiences></app-experiences>',
    },
    {
      title: 'Skill',
      link: '<app-skill></app-skill>',
    },
    {
      title: 'Studies',
      link: '<app-study></app-study>',
    },
    {
      title: 'I-am',
      link: '<app-i-am></app-i-am>',
    },
    {
      title: 'Contact',
      link: '<app-contact></app-contact>',
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onAddPageList(){
    this.addedPage.emit(this.page);
  }

}

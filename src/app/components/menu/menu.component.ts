import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import {Page} from '../../models/pagesObjs';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  post: Page = {
      title: 'post',
      link: '/post',
    };
  emails: Page = {
      title: 'emials',
      link: '/email',
    };


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

  constructor(
    private navCom :NavBarComponent,
    private authServ : AutenticacionService) { }

  ngOnInit(): void{
    if (this.authServ.UsuarioAutenticado == true){
      this.pages.push(this.emails);
      this.pages.push(this.post)
    }
  }
  onAddPageList(){
      this.addedPage.emit(this.page);
  }
  ClickAlert(){
    this.navCom.toggleMenu();
  }

}

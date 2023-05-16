import { Component, OnInit, Renderer2 } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // aboutList: About[] = [];
  // about1: About [] = [];
  posicion: number = 1;


  aboutList: any = [];
  about1: any = [];



  constructor(
    private aboutServ: AboutService) {
   }

  ngOnInit(): void {
    // this.aboutServ.getAllAbouts()
    // .subscribe(data =>{
    //   this.aboutList = data;
    //   this.about1 = this.aboutList.slice(0 , 1)
    // })
    setTimeout(() => {
      try {
        // this.estudioServ.getAllEstudios()
        //   .subscribe(data =>{
        //   this.est = data;
        // })
        console.log(dataBase[7]);
        this.aboutList = dataBase[1].data;
        this.about1 = this.aboutList.slice(0 , 1)
      } catch (error) {
        console.error(error);
      }
    }, 400);
  }
  SumarPagina():void{
    const aboutN: number = this.aboutList.length;
    if (aboutN > this.posicion) {
      this.about1 = this.aboutList.slice((this.posicion), (this.posicion + 1));
      this.posicion += 1;
    }
  }
  RestarPagina():void{
    const aboutN: number = this.aboutList.length;
    if(this.posicion > 1){
      if (aboutN >= this.posicion) {
        this.about1 = this.aboutList.slice((this.posicion -2), (this.posicion -1));
        this.posicion -= 1;
      }
    }
  }

}

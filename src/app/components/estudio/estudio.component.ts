import { Component, OnInit } from '@angular/core';
import {EstudioService} from 'src/app/services/estudio.service';
import { EstudioLoading } from 'src/app/models/estudioOBJ';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
import { HeadComponent } from '../head/head.component';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  loading: any = {
    id:'' ,
    title:'Loading...' ,
    pp:'Starting the server, wait a few minutes',
    img:'https://i.imgur.com/ITNhgTu.png'
  }

  //array para cuando se filtra
  estFilter: any = [];
  // searchValue: string = '';

  est: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];
  estudioready: boolean = true;

  constructor(private estudioServ: EstudioService) { }

  ngOnInit(): void {
    setTimeout(() => {
      try {
        // this.estudioServ.getAllEstudios()
        //   .subscribe(data =>{
        //   this.est = data;
        // })
        // console.log(dataBase);

        this.est = dataBase[7].data;
        // console.log(this.est);

      } catch (error) {
        console.error(error);
      }
    }, 400);

    // if (this.searchValue !== null) {
    //   this.filteredEst = this.est.filter((item: any) =>
    //     item.toLowerCase().includes(this.searchValue.toLowerCase())
    //   );
    // } else {
    //   this.filteredEst = this.est;
    // }
  }

}

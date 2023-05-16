import { Component, OnInit } from '@angular/core';
import {EstudioService} from 'src/app/services/estudio.service';
import { EstudioLoading } from 'src/app/models/estudioOBJ';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {
  loading: EstudioLoading = {
    id:'' ,
    estudiado:'Loading...' ,
    institucion:'Starting the server, wait a few minutes',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }

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
      } catch (error) {
        console.error(error);
      }
    }, 400);
  }

}

import { Component, OnInit } from '@angular/core';
import {EstudioService} from 'src/app/services/estudio.service';
import { EstudioLoading } from 'src/app/models/estudioOBJ';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  loading: EstudioLoading = {
    id:'' ,
    estudiado:'Loading...' ,
    institucion:'Prendiendo servidor, puede demorar algunos segundos',
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
      try {

        this.estudioServ.getAllEstudios()
          .subscribe(data =>{
          this.est = data;
        })
      } catch (error) {
        console.error(error);
      }

  }

}

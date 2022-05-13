import { Component, OnInit } from '@angular/core';
import {EstudioService} from 'src/app/services/estudio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  est: any = [];

  constructor(private estudioServ: EstudioService) { }

  ngOnInit(): void {
    this.estudioServ.getAllEstudios()
    .subscribe(data =>{
      this.est = data;
    })
  }

}

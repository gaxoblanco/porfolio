import { Component, OnInit } from '@angular/core';
import {EstudioService} from 'src/app/services/estudio.service';
import { EstudioLoading } from 'src/app/models/estudioOBJ';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
import { HeadComponent } from '../head/head.component';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


//---services
import { SearchService } from '../../search-service.service';

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

  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  //arrya fiultrado
  filteredEst:any= [];

  est: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];
  estudioready: boolean = true;

  constructor(
    private estudioServ: EstudioService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    const searchValue = this.searchService.getSearchValue();
    setTimeout(() => {
      try {
        this.est = dataBase[7].data;
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

    this.searchValueSubscription = this.searchService.getSearchValue()
    .pipe(
      debounceTime(300), // Opcional: agregar un tiempo de espera antes de realizar el filtrado
      distinctUntilChanged() // Opcional: filtrar solo cambios distintos al valor anterior
    )
    .subscribe((value: string | null) => {
      this.filteredEst = this.searchService.filterArray(this.est, value);
      console.log(this.filteredEst);

    });
  }
  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
  }
}

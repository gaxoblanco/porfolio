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
  filteredEst: any[] = [];

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
    setTimeout(() => {
      try {
        this.est = dataBase[7].data;
      } catch (error) {
        console.error(error);
      }
    }, 400);
// Suscribirse al observable searchValue
this.searchValueSubscription = this.searchService.searchValue.pipe(
  debounceTime(300), // Esperar 300ms después de la última emisión
  distinctUntilChanged() // Ignorar emisiones consecutivas con el mismo valor
).subscribe((inputValue: string) => {
  if (inputValue.trim() !== '') {
    this.est = this.est.filter((item: any) => {
      // Convertir el valor de búsqueda y los campos relevantes a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
      const searchValue = inputValue.toLowerCase();
      const title = item.title.toLowerCase();
      const pp = item.pp ? item.pp.toLowerCase() : '';
      const tags = item.tags ? item.tags.join(' ').toLowerCase() : '';

      // Comprobar si el valor de búsqueda coincide con el título, la descripción o las etiquetas
      return (
        title.includes(searchValue) ||
        tags.includes(searchValue)
      );
    });
  } else {
    // Si el valor de búsqueda está vacío, mostrar todos los elementos
    this.filteredEst = this.est;
  }
});
  }
  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
  }
}

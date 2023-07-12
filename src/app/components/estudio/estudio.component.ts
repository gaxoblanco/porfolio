import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { EstudioService } from 'src/app/services/estudio.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
import { HeadComponent } from '../head/head.component';


//---services
import { SearchService } from '../../search-service.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss'],
  animations: [
    trigger('fadeInTopp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
  ]
})
export class EstudioComponent implements OnInit {
  originalEst: any = []; // Copia del array original
  loading: any = {
    id: '',
    title: 'Loading...',
    pp: 'Starting the server, wait a few minutes',
    img: 'https://i.imgur.com/ITNhgTu.png',
  };

  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  //arrya fiultrado
  filteredEst: any[] = [];

  est: any = [this.loading, this.loading, this.loading, this.loading];
  estudioready: boolean = true;

  constructor(
    private estudioServ: EstudioService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      try {
        this.originalEst = dataBase[7].data; // Guardar una copia del array
        this.est = dataBase[7].data;
      } catch (error) {
        console.error(error);
      }
    }, 400);
    // Suscribirse al observable searchValue
    this.searchValueSubscription = this.searchService.searchValue
      .pipe(
        debounceTime(300), // Esperar 300ms después de la última emisión
        distinctUntilChanged() // Ignorar emisiones consecutivas con el mismo valor
      )
      .subscribe((inputValue: string) => {
        if (inputValue.trim() !== '') {
          this.est = this.originalEst.filter((item: any) => {
            // Convertir el valor de búsqueda y los campos relevantes a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
            const searchValue = inputValue.toLowerCase();
            const title = item.title.toLowerCase();
            // const pp = item.pp ? item.pp.toLowerCase() : '';
            const tags = item.tags ? item.tags.join(' ').toLowerCase() : '';

            // Comprobar si el valor de búsqueda coincide con el título, la descripción o las etiquetas
            return title.includes(searchValue) || tags.includes(searchValue);
          });
        } else {
          // Si el valor de búsqueda está vacío, mostrar todos los elementos
          this.est = this.originalEst;
        }
      });
  }
  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
  }
  obtenerAnimacion(index: number): string {
    return index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';
  }
}

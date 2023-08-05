import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
//---
import { SearchService } from '../../search-service.service';
import { ExperienceService } from '../../services/experience.service';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('fadeInTopp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
  ]
})
export class WorkComponent {
  originalExp: any = []; // Copia del array original
  loading: any = {
    id: '',
    title: 'Loading...',
    pp: 'Starting the server, wait a few minutes',
    img: 'https://i.imgur.com/ITNhgTu.png',
  };

  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  //arrya fiultrado
  filteredExp: any[] = [];

  exp: any = [this.loading, this.loading, this.loading, this.loading];
  experienceready: boolean = true;


constructor(
  private searchService: SearchService,
  private changeDetectorRef: ChangeDetectorRef
) {}

  ngOnInit(): void {
    setTimeout(() => {
      try {
        this.originalExp = dataBase[3].data; // Guardar una copia del array
        this.exp = dataBase[3].data;
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
          this.exp = this.originalExp.filter((item: any) => {
            // Convertir el valor de búsqueda y los campos relevantes a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
            const searchValue = inputValue.toLowerCase();
            const title = item.title.toLowerCase();
            // const pp = item.pp ? item.pp.toLowerCase() : '';
            const tags = item.tags ? item.tags.join(' ').toLowerCase() : '';
            // Comprobar si el valor de búsqueda coincide con el título, la descripción o las etiquetas
            return title.includes(searchValue) || tags.includes(searchValue);
          });
          this.changeDetectorRef.detectChanges();
        } else {
          // Si el valor de búsqueda está vacío, mostrar todos los elementos
          this.exp = this.originalExp;
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

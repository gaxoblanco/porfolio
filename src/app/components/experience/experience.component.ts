import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ExperienceService } from '../../services/experience.service';
import { ExperienceLoading} from '../../models/experienceObj';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';

//---services
import { SearchService } from '../../search-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  originalExp: any = [];
  filteredExp: any[] = [];
  loading: ExperienceLoading = {
    trabajo:'Loading...' ,
    puesto:'Starting the server, wait a few minutes',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }
  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  exp: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    private experienceServ: ExperienceService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      try {
        // this.experienceServ.getAllExperiences()
        // .subscribe(data =>{
        //   this.exp = data;
        // });
        this.originalExp = dataBase[3].data;
        this.exp = dataBase[3].data;
        console.log(this.exp);


      } catch (error) {
        console.error(error);
      }
    }, 400);

    // Suscribirse al observable searchValue
    // this.searchValueSubscription = this.searchService.searchValue
    //   .pipe(
    //     debounceTime(300), // Esperar 300ms después de la última emisión
    //     distinctUntilChanged() // Ignorar emisiones consecutivas con el mismo valor
    //   )
    //   .subscribe((inputValue: string) => {
    //     if (inputValue.trim() !== '') {
    //       this.exp = this.originalExp.filter((item: any) => {
    //         // Convertir el valor de búsqueda y los campos relevantes a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
    //         const searchValue = inputValue.toLowerCase();
    //         const title = item.title.toLowerCase();
    //         // const pp = item.pp ? item.pp.toLowerCase() : '';
    //         const tags = item.tags ? item.tags.join(' ').toLowerCase() : '';

    //         // Comprobar si el valor de búsqueda coincide con el título, la descripción o las etiquetas
    //         return title.includes(searchValue) || tags.includes(searchValue);
    //       });
    //     } else {
    //       // Si el valor de búsqueda está vacío, mostrar todos los elementos
    //       this.exp = this.originalExp;

    //     }
    //   });
  }

  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
  }
}

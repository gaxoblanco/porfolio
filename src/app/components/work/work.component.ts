import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ExperienceService } from '../../services/experience.service';
import { ExperienceLoading} from '../../models/experienceObj';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
//---services
import { SearchService } from '../../search-service.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  originalWork: any = [];
  filteredWork: any[] = [];
  loading: any = {
    id:'1',
    title:'Loadding',
    pp:'Utilizo HTML Semántico tanto como puedo. Aún no lo domino como me gustaría -- Utilizo HTML Semántico tanto como puedo. Aún no lo domino como',
    ini: "2-2-22",
    fin: "2-2-22",
    web: 'HTML Semántico ',
    img: '../../../assets/desarollo_web.png',
    tags: ['html', "css", "storybook"],
  }
  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  works: any = [
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
    this.originalWork = dataBase[3].data;
        this.works = dataBase[3].data;
    setTimeout(() => {
      try {

        console.log(this.works[0]);
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
          this.works = this.originalWork.filter((item: any) => {
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
          this.works = this.originalWork;

        }
      });
  }

  ngOnDestroy(): void {
    this.searchValueSubscription.unsubscribe();
  }
}

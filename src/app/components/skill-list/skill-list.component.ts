import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skillObj';
import {SkillService} from '../../services/skill.service';
import dataBase from '../../data/bvkqwz8kaistnatp2nzs.json';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/search-service.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {

  loading = {
    nombre:'Loading...' ,
    descripcion:'Starting the server, wait a few minutes',
    logo:'https://i.imgur.com/ITNhgTu.png'
  }

  // variable de tipo subscription
  private searchValueSubscription!: Subscription;
  //array de filtrado
  filterSkill: any[] = [];

  skillList: any = [
    this.loading,
    this.loading,
    this.loading,
    this.loading,
  ];

  constructor(
    private skillService: SkillService,
    private searchService: SearchService
    ) { }


  ngOnInit(): void {
    setTimeout(() => {
      try {
        this.skillList = dataBase[6].data;
      } catch (error) {
        console.error(error);
      }
    }, 400);
    // suscrirse al observable searchValue
    this.searchValueSubscription = this.searchService.searchValue
      .pipe(
        debounceTime(300), // Esperar 300ms después de la última emisión
        distinctUntilChanged() // Ignorar emisiones consecutivas con el mismo valor
      )
      .subscribe((inputValue: string) => {
        if (inputValue.trim() !== '') {
          this.skillList = this.skillList.filter((item: any) => {
            // Convertir el valor de búsqueda y el campo "nombre" a minúsculas para una comparación sin distinción entre mayúsculas y minúsculas
            const searchValue = inputValue.toLowerCase();
            const nombre = item.nombre.toLowerCase();
            // Filtrar solo por el campo "nombre"
            return (
              nombre.includes(searchValue)
            );
          });
        } else {
          // Restablecer los datos originales
          this.skillList = dataBase[6].data;
        }
      });

  }



}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchValueSubject = new BehaviorSubject<string>('');
  searchValue = this.searchValueSubject.asObservable();

  constructor() {}

  // private searchValueSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  setSearchValue(value: string | null) {
    if (typeof value === 'string') {
      this.searchValueSubject.next(value);
    }
  }


  // search(inputValue: string | null) {
  //   if (typeof inputValue === 'string') {
  //     this.searchValueSubject.next(inputValue);
  //     console.log('hola');
  //   }
  // }
}

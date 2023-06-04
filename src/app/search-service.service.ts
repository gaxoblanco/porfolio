import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // searchValue: string | null = null;

  constructor() {}

  private searchValueSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  setSearchValue(value: string | null) {
    this.searchValueSubject.next(value);
  }

  getSearchValue(): Observable<string | null> {
    return this.searchValueSubject.asObservable();
  }

  filterArray(array: any[], searchValue: string | null): any[] {
    if (searchValue !== null) {
      return array.filter((item: any) =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return array;
    }
  }
}

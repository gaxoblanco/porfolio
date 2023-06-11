import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorStateService {
  constructor() { }

  public colorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  colorState$ = this.colorSubject.asObservable();

  setColorState(color: string): void {
  const allowedColors = ['acromatopsia', 'tritanopia', 'deuteranopia'];
  const validColor = allowedColors.includes(color) ? color : '';
    this.colorSubject.next(validColor);
  }
}

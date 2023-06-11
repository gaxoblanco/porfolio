import { Component, OnInit } from '@angular/core';
import { ColorStateService } from '../../color-state.service';

@Component({
  selector: 'app-blindness',
  templateUrl: './blindness.component.html',
  styleUrls: ['./blindness.component.scss']
})
export class BlindnessComponent implements OnInit {
  colorState: string = '';

  constructor(private colorStateService: ColorStateService) {}

  ngOnInit(): void {
    this.colorStateService.colorSubject.subscribe((color: string) => {
      this.colorState = color;
    });
  }

  acromatopsiaF():void {
    if (this.colorState != 'acromatopsia') {
      this.colorStateService.setColorState('acromatopsia');
    } else {
      this.colorStateService.setColorState('all');
    }

  }
  tritanopiaF():void {
    if (this.colorState != 'tritanopia') {
      this.colorStateService.setColorState('tritanopia');
    } else {
      this.colorStateService.setColorState('all');
    }
  }
  deuteranopiaF():void {
    if (this.colorState != 'deuteranopia') {
      this.colorStateService.setColorState('deuteranopia');
    } else {
      this.colorStateService.setColorState('all');
    }
  }
}

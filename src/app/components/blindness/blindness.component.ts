import { Component, OnInit } from '@angular/core';
import { ColorStateService } from '../../color-state.service';

@Component({
  selector: 'app-blindness',
  templateUrl: './blindness.component.html',
  styleUrls: ['./blindness.component.scss']
})
export class BlindnessComponent implements OnInit {
  colorState: string = '';
  textInfo: string = 'Color Responsiveness See the Web through the eyes of someone with color deficiency.'

  constructor(private colorStateService: ColorStateService) {}

  ngOnInit(): void {
    this.colorStateService.colorSubject.subscribe((color: string) => {
      this.colorState = color;
    });

  }

  acromatopsiaF():void {
    if (this.colorState != 'acromatopsia') {
      this.colorStateService.setColorState('acromatopsia');
      this.textInfo = 'Acromatopsia is a condition in which everything is seen in black and white.'
    } else {
      this.colorStateService.setColorState('all');
      this.textInfo ='Color Responsiveness See the Web through the eyes of someone with color deficiency.'
    }

  }
  tritanopiaF():void {
    if (this.colorState != 'tritanopia') {
      this.colorStateService.setColorState('tritanopia');
      this.textInfo = 'Tritanopia is a condition in which there is a lack of sensitivity to the color blue.'
    } else {
      this.colorStateService.setColorState('all');
      this.textInfo ='Color Responsiveness See the Web through the eyes of someone with color deficiency.'
    }
  }
  deuteranopiaF():void {
    if (this.colorState != 'deuteranopia') {
      this.colorStateService.setColorState('deuteranopia');
      this.textInfo = 'Deuteranopia is a condition in which there is a lack of sensitivity to the color green.'
    } else {
      this.colorStateService.setColorState('all');
      this.textInfo ='Color Responsiveness See the Web through the eyes of someone with color deficiency.'
    }
  }
}

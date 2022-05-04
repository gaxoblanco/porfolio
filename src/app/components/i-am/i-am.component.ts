import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';


@Component({
  selector: 'app-i-am',
  templateUrl: './i-am.component.html',
  styleUrls: ['./i-am.component.scss']
})
export class IAmComponent implements OnInit {

  @Input() about: About = {
    id: '',
    titulo: '',
    descripcion: '',
    foto: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

}

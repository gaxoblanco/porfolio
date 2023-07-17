import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EstudioService } from 'src/app/services/estudio.service';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { ColorStateService } from '../../color-state.service';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss']
})
export class CardExampleComponent implements OnInit {
  colorState: string = '';
  active: boolean = false;
  logeado: boolean = false;
  more: boolean = false;
  saveDate = '';

  @ViewChild('truncateContainer') truncateContainerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('truncateContent') truncateContentRef!: ElementRef<HTMLParagraphElement>;

  isTruncated = true;

  @Input() cardObj: any = {
    id:'1',
    title:'Loadding',
    pp:'Utilizo HTML Semántico tanto como puedo. Aún no lo domino como me gustaría -- Utilizo HTML Semántico tanto como puedo. Aún no lo domino como',
    ini: new Date(),
    fin: new Date(),
    web: 'HTML Semántico ',
    img: '../../../assets/desarollo_web.png',
    tags: ['html', "css", "storybook"],
  };

  constructor(
    private studyServ : EstudioService,
    private authServ : AutenticacionService,
    private colorStateService: ColorStateService
  ) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }

    this.colorStateService.colorSubject.subscribe((color: string) => {
      this.colorState = color;
    });

  }
  toggleTruncate(): void {
    this.isTruncated = !this.isTruncated;
  }
}

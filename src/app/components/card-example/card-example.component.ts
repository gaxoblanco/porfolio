import { Component, Input, OnInit } from '@angular/core';
import { EstudioService } from 'src/app/services/estudio.service';
import { EstudioComponent } from '../estudio/estudio.component';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-card-example',
  templateUrl: './card-example.component.html',
  styleUrls: ['./card-example.component.scss']
})
export class CardExampleComponent implements OnInit {

  active: boolean = false;
  logeado: boolean = false;
  more: boolean = false;
  saveDate = '';

  @Input() cardObj: any = {
    id:'1',
    title:'Loadding',
    pp:'Utilizo HTML Semántico tanto como puedo. Aún no lo domino como me gustaría -- Utilizo HTML Semántico tanto como puedo. Aún no lo domino como',
    ini: new Date(),
    fin: new Date(),
    web: 'lizo HTML Semántico ',
    img: '../../../assets/desarollo_web.png',
    tags: ['html', "css", "storybook"],
  };

  constructor(
    private studyServ : EstudioService,
    private reload : EstudioComponent,
    private authServ : AutenticacionService,
  ) { }

  ngOnInit(): void {
    if (this.authServ.UsuarioAutenticado == true){
      this.logeado = this.authServ.UsuarioAutenticado
    }
    console.log(this.cardObj);
  }

}

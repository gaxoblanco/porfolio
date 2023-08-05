import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Ruta } from 'src/app/models/rout-Obj';
import { RoutService } from 'src/app/services/rout-.service';
import { HeadComponent } from '../../head/head.component';

@Component({
  selector: 'app-rout-up-data',
  templateUrl: './rout-up-data.component.html',
  styleUrls: ['./rout-up-data.component.scss']
})
export class RoutUpDataComponent implements OnInit {
  DataRout: UntypedFormGroup;

  constructor(

    private headCom : HeadComponent) {
      this.DataRout = new UntypedFormGroup({
        nombre: new UntypedFormControl(''),
        descripcion: new UntypedFormControl(''),
      })
    }

  ngOnInit(): void {
  }
  UpRout(){
    let DataR: Ruta = this.DataRout.value;
    // this.headCom.editRout(DataR)
  }
  clouseWind(){
    this.headCom.active = false;
  }
}

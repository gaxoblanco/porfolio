import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  page: number = 1;

  aboutList: About[] = [];

  about1 = this.aboutList.slice(1).values;


  constructor(private aboutServ: AboutService) { }

  ngOnInit(): void {
    this.aboutServ.getAllAbouts()
    .subscribe(data =>{
      console.log(data);
      this.aboutList = data;
    })
  }


}

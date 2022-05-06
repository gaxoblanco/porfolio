import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutList: About[] = [];

  constructor(private aboutServ: AboutService) { }

  ngOnInit(): void {
    this.aboutServ.getAllAbouts()
    .subscribe(data =>{
      console.log(data);
      this.aboutList = data;
    })
  }

}

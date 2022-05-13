import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {


  constructor(private routinData : AppRoutingModule) { }

  ngOnInit(): void {
  }

}

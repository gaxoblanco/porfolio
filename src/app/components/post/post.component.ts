import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/models/pagesObjs';
import { AboutPostComponent } from '../postOptions/about-post/about-post.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

active: any = [
  {activeEst : false},
  {activeExp : false},
  {activeSki : false},
  {activeAbo : false}
];

  isActiv = this.active.every((item: boolean) => item <= false)




  constructor() { }


  ngOnInit(): void {
  }
  activeEstudy(){
    if (this.isActiv == true){
      this.active.forEach((activ: boolean) =>{
        activ = false, console.log("salio mal")
      })
    } else{
      this.active.activeEst = !this.active.activeEst;
    console.log(this.active)
    }

  }

  activeExperience(){
    this.active.activeExp = !this.active.activeExp;
  }
  activeSkill(){
    this.active.activeSki = !this.active.activeSki;
  }
  activeAbout(){
    this.active.activeAbo = !this.active.activeAbo;
  }
}

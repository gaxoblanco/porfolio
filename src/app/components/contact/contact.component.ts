import { Component, OnInit } from '@angular/core';
import { Contact} from '../../models/formObj'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email : '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.contact);
  }

}

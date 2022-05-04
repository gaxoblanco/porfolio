import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
//import {User, CreateUserDTO} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 // const newUser: CreateUserDTO = {
 //   email: 'gaston@blanco.com',
 //   name: 'Gaston',
 //   password: '112233',
 // };

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
  }

  createUser(){
    this.usersService.create({
      name: 'Gaston',
      email: 'gaston@blanco.com',
      password: '112233'
    })
    .subscribe(rta =>{
      console.log(rta);
    })
  }

  login(){
    this.authService.login('gaston@blanco.com', '112233')
    .subscribe(rta =>{
      console.log(rta.access_token);
    })
    console.log("login");
  }

}

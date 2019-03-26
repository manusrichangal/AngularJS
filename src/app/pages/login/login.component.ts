import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor()
  { 

  }
  username:''
  password:''

ngOnInit()
  {
    localStorage.setItem('username', JSON.stringify("Manusri"));
    console.log(localStorage.getItem('username'));

    localStorage.setItem('password', JSON.stringify("asdfg"));
    console.log(localStorage.getItem('password'));
  }
}

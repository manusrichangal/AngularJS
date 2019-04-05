import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(){}

  loginUser(event)
  {
    event.preventDefault()
    const target= event.target
    const email=target.querySelector('#email').value
    const password=target.querySelector('#password').value
    console.log(email,password)
  }



}

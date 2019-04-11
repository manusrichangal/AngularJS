import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegisterService } from '../register/register.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  show =false;
  login(){
    this.show = true;
 
  }
  constructor(regser: RegisterService){}

  loginUser(event)
  {
    event.preventDefault()
    const target= event.target
    const email=target.querySelector('#email').value
    const password=target.querySelector('#password').value
    console.log(email,password)
  }

  onSubmit(){
    console.log();

  }
  popup(){
    alert("Successfully Logged in.")
  }
  
}

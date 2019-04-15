import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor() { }

  

  register(user)
  {

    localStorage.setItem('username', JSON.stringify(user.username));
    console.log("Username : "+localStorage.getItem('username'));
    
    localStorage.setItem('phone', JSON.stringify(user.number));
    console.log("Phone : "+localStorage.getItem('phone'));

    localStorage.setItem('password', JSON.stringify(user.password));
    console.log("Password : "+localStorage.getItem('password'));

    localStorage.setItem('cnfpass', JSON.stringify(user.cnfpassword));
    console.log("Password Confirmed "+localStorage.getItem('cnfpass'));
 
  }
}

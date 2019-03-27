import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor() { }

  

  register(user){
    localStorage.setItem('username', JSON.stringify(user.username));
    console.log(localStorage.getItem('username'));
    
    localStorage.setItem('phone', JSON.stringify(user.number));
    console.log(localStorage.getItem('phone'));

    localStorage.setItem('password', JSON.stringify(user.password));
    console.log(localStorage.getItem('password'));

    localStorage.setItem('cnfpass', JSON.stringify(user.cnfpassword));
    console.log(localStorage.getItem('cnfpass'));
  }
}

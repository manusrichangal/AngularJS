import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  
  form: FormGroup;
  constructor(private fb: FormBuilder)
  {
    this.form=this.fb.group
    ({
      username:['',[Validators.required,Validators.minLength(5)]],
      phone: [''],
      password:[''],
      cnfpass:['',passValidator]
    });
    
    this.form.controls.password.valueChanges
    .subscribe(
      x=>this.form.controls.cnfpass.updateValueAndValidity()
    )

    this.form.controls.username.valueChanges
    .subscribe(
      x=>this.form.controls.username.updateValueAndValidity()
    )
  }

  ngOnInit()
  {
    localStorage.setItem('username', JSON.stringify('Manusri'));
    console.log(localStorage.getItem('username'));

    localStorage.setItem('phone', JSON.stringify('123456789'));
    console.log(localStorage.getItem('phone'));

    localStorage.setItem('password', JSON.stringify('asdfg'));
    console.log(localStorage.getItem('password'));

    localStorage.setItem('cnfpass', JSON.stringify('asdfg'));
    console.log(localStorage.getItem('cnfpass'));
  }

}
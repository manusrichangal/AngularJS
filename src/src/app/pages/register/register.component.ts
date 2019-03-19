import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';
import {LocalStorageService} from 'ngx-webstorage';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  form: FormGroup;
  constructor(private fb: FormBuilder, private localSt:LocalStorageService){
    this.form=this.fb.group({
      username:['', Validators.required,Validators.minLength(4)],
      phone: '',
      password:'',
      cnfpass:['',passValidator]
    });

    this.form.controls.password.valueChanges
    .subscribe(
      x=>this.form.controls.cnfpass.updateValueAndValidity()
    )
  }
  onSubmit(){
    //console.log(this.form.value);
    this.form.markAsTouched();
    }

  setLocalStorage(){
    this.localSt.store('username',"Manusri");
  }
  getLocalStorage(){
    alert(this.localSt.retrieve('username'));
  }
  delLocalStorage(){
    this.localSt.clear('boundValue');
  }
}

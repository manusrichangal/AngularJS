import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],
      phone: '',
      password:'',
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
  onSubmit(){
    //console.log(this.form.value);
    this.form.markAsTouched();
    }
}

import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormsModule } from '@angular/forms';
import {passValidator} from './validator';
import { RegisterService } from '../register/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent
{
  registerUserData={};
  
  form: FormGroup;
  constructor(private fb: FormBuilder,private regser: RegisterService)
  {
    this.form=this.fb.group
    ({
      username:['',[Validators.required,FormsModule,Validators.minLength(5)]],
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

  onSubmit(){
    this.regser.register(this.registerUserData);
  }
}
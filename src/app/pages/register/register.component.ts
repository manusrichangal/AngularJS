import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent
{
  
  form: FormGroup;
  constructor(private fb: FormBuilder)
  {
    this.form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)], this.setUsername()],
      phone: ['',this.setPhone()],
      password:['',this.setPass()],
      cnfpass:['',passValidator,this.setCnf()]
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
  

  
  public setUsername(){
   //let username='Manusri';
  localStorage.setItem('username', 'Manusri');
  console.log(localStorage.getItem('username'));
   //localStorage.setItem('username', JSON.stringify(username));
  }

  //public getUsername(){
   //let u=  if(localStorage.getItem('username')===null){
     //this.username
   //}
   //JSON.parse(localStorage.getItem('username'));
   //console.log(u);
  // let retrievedObject = localStorage.getItem('username');
  // console.log('retrievedObject: ', JSON.parse(retrievedObject));
 //}


  public setPhone(){
    localStorage.setItem('phone', '123456789');
    let p = localStorage.getItem('phone');
    console.log(p);
  }
 // public getPhone(){

  //}


  public setPass(){
    localStorage.setItem('password', 'asdfg');
    let pass= localStorage.getItem('password');
    console.log(pass);

  }
 // public getPass(){


  //}


  public setCnf(){
    localStorage.setItem('cnfpass', 'asdfg');
    let cnf = localStorage.getItem('cnfpass');
    console.log(cnf);

  }
 // public getCnf(){

  //}


  onSubmit(){
    //console.log(this.form.value);
    this.form.markAsTouched();
    }
}

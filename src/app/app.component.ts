import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';

  //form: FormGroup;
  //constructor(private fb: FormBuilder){
    //this.form=this.fb.group({
      //username:['', Validators.required ,Validators.minLength(4)],
     // password:'',
      //cnfpass:['',passValidator]
    //});

   // this.form.controls.password.valueChanges
    //.subscribe(
    //  x=>this.form.controls.cnfpass.updateValueAndValidity()
   // )
  //}
 // onSubmit(){
    //console.log(this.form.value);
   // this.form.markAsTouched();
   // }
}


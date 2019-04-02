import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {passValidator} from './validator';
import { HttpClient, HttpParams } from '@angular/common/http'
import { post } from './post';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';

  readonly ROOT_URL='https://jsonplaceholder.typicode.com';

  posts : Observable<any>;

  constructor(private http: HttpClient) {}

  getPosts(){

    let params= new HttpParams().set('userId','1');
    this.posts= this.http.get(this.ROOT_URL + '/posts', { params })
  }

}
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



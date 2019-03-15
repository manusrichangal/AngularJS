import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form=this.fb.group({
      username:['', Validators.minLength(4)],
      password:'',
      cnfpass:''
    });
  }
  onSubmit(){
    console.log(this.form.value);
    }
}


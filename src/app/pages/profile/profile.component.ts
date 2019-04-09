import { Component} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  userData:any=[
    {name:"Murder of Roger Ackroyd", Genre:"Thriller", Author:"Agatha Christie"},
    {name:"Wuthering Heights", Genre:"Gothic fiction", Author:"Emily Brontë"},
    {name:"The fault in our stars", Genre:"YA fiction", Author:"John Green"},
    {name:"Famous Five", Genre:"Adventure fiction", Author:"Enid Blyton"}
  ];

  getUser(user):void{
    console.log(user);
  }

  constructor() {
    console.log(this.userData);
   }

}

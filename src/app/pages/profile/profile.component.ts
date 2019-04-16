import { Component} from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  userData:any=[
  {
    name:"Murder of Roger Ackroyd", 
    Genre:"Thriller", 
    Author:"Agatha Christie",
    photo:"../../../assets/mora.jpg"
  },
  {
    name:"Wuthering Heights", 
    Genre:"Gothic fiction", 
    Author:"Emily Brontë",
    photo:"../../../assets/wh.jpg"
  },
  {
    name:"The fault in our stars", 
    Genre:"YA fiction", 
    Author:"John Green",
    photo:"../../../assets/tfios.jpg"
  },
  {
    name:"Famous Five", 
    Genre:"Adventure fiction", 
    Author:"Enid Blyton",
    photo:"../../../assets/ff5.jpg"
  }
  ];

  getUser(user):void{
    console.log(user);
    alert(JSON.stringify(user));

  }
  constructor() {
    console.log(this.userData);
   }

   userData1:any=[
    {
      item1:"Fiction", 
      item2:"Non-Fiction", 
      item3:"Fantasy",
      item4:"Mystery"
    }
  ]
}

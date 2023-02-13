import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginForm';
   username:any;

  constructor() { }
  
  name:string |undefined;
  show:any;
  onClick(){
    this.show = this.name;
    console.log('hello');
  }

  
  
 
}


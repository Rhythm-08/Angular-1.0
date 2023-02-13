import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent {
  title = 'Reactive Form';
  loginForm = new FormGroup({
            first: new FormControl('', Validators.required), 
            last: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            city: new FormControl('', Validators.required),
            state: new FormControl('', Validators.required),
            zip: new FormControl('', Validators.required),
            checkout: new FormControl('', Validators.requiredTrue)
            

    }) // end of loginuser
      loginUser(){
        console.log(this.loginForm.value);
      }
      get first(){
        return this.loginForm.get('first');
      }
      get last(){
        return this.loginForm.get('last');
      }
      get email(){
        return this.loginForm.get('email');
      }
      get city(){
        return this.loginForm.get('city');
      }
      get state(){
        return this.loginForm.get('state');
      }
      get zip(){
        return this.loginForm.get('zip');
      }
     get checkout(){
        
        return this.loginForm.get('checkout');
      }
   
      sub(){
        console.log(this.loginForm.get('last'))
      }
}

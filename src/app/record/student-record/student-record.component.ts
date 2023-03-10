import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { export_Arr } from 'src/export';
@Component({
  selector: 'app-student-record',
  templateUrl: './student-record.component.html',
  styleUrls: ['./student-record.component.css']
})


export class StudentRecordComponent {

 public student_result=export_Arr;
  
  StudentForm = new FormGroup({
    first: new FormControl('', Validators.required), 
    last: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),
    });
    studentform() {
      console.log(this.StudentForm.value);
      const spd = this.StudentForm.value;
      this.student_result.push(spd);
      console.log(this.student_result)
    }
  
    get first(){
      return this.StudentForm.get('first');
    }
    get last(){
      return this.StudentForm.get('last');
    }
    get email(){
      return this.StudentForm.get('email');
    }
    get city(){
      return this.StudentForm.get('city');
    }
    get state(){
      return this.StudentForm.get('state');
    }
    get zip(){
      return this.StudentForm.get('zip');
    }
  
   
}

import { Component } from '@angular/core';
import { export_Arr } from 'src/export';

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css'],
  
})
export class StudentResultComponent {
  showTable = false;
    sub(){
      this.showTable = !this.showTable;
      console.log(export_Arr);
    }
    delete(t:any){
      export_Arr.splice(t,1);
    }
    
    export_Arr = export_Arr;
   
}

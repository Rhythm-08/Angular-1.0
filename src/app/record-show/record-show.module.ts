import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentResultComponent } from './student-result/student-result.component';
import { export_Arr } from 'src/export';

@NgModule({
  declarations: [
    StudentResultComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    StudentResultComponent
  ]
})
export class RecordShowModule { 

   stud=export_Arr;
   
  
}

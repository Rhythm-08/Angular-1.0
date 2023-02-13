import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRecordComponent } from './student-record/student-record.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    StudentRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentRecordComponent
  ]
})
export class RecordModule { }

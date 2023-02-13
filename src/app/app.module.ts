import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactformComponent } from './reactiveform/reactform/reactform.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecordModule} from './record/record.module'
import {RecordShowModule} from './record-show/record-show.module'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ReactformComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecordModule,
    RecordShowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

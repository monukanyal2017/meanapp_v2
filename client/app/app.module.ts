import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {DashboardComponent } from './components/dashboard.component';
import {LoginComponent} from './components/login.component';

import {routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,routing ],
  declarations: [ AppComponent,DashboardComponent,LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

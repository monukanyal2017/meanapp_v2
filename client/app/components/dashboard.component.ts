import { Component } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  moduleId:module.id,   //mandatory if you are using Url ex: templateUrl,
  selector: 'dashboard',
  //template: '<h1>My First Angular App</h1>'
  templateUrl:'dashboard.component.html',
  providers:[ApiService]
})

export class DashboardComponent { }
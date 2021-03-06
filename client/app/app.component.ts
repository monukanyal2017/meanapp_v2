import { Component } from '@angular/core';
import {ApiService} from './services/api.service';


@Component({
  moduleId:module.id,   //mandatory if you are using Url ex: templateUrl,
  selector: 'my-app',
  //template: '<h1>My First Angular App</h1>'
  templateUrl:'app.component.html',
  providers:[ApiService]
})

export class AppComponent {}
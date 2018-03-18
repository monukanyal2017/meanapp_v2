import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  moduleId:module.id,   //mandatory if you are using Url ex: templateUrl,
  selector: 'login',
  //template: '<h1>My First Angular App</h1>'
  templateUrl:'login.component.html',
  providers:[ApiService]
})

export class LoginComponent {

	user:any;
	loading:boolean =true;   //it will show loader 

   constructor( private _ApiService:ApiService,private router: Router)
   {
  		 this.loading=false;
    	 if (localStorage.getItem('currentUser')) {
            // logged in so return true
           //return true;
        	console.log('user logged in already');
        	console.log('should redirect to dashboard');
        } 	 				
   }

   onSubmit(form: NgForm,route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
   {
     this.loading=true;
     
     console.log('event working');
     
     console.log(form.value.email);
     //console.log(form.value.password);
   	this._ApiService.VerifyUser(form.value).subscribe(user=>{
   		console.log(user);
   		console.log(user.auth);
   		if(user.auth==false)
   		{
   			console.log('user does not exist');
          this.loading=false;
   		}
   		else
   		{
   			console.log(user.result);
   			console.log(user.token);
   			localStorage.setItem('currentUser',user.result);
   			localStorage.setItem('token',user.token);
   			this.loading=false;
        this.router.navigate(['/dashboard']);;
   			
   		}
   		//this.user=user;
   	});

   }
 }
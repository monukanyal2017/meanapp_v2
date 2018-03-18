import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {appConfig} from './appConfig';

@Injectable()
export class ApiService{
    
    endpoint:any;
     private client_id = 'c8b1b7dc7749635f177e';
     private client_secret = '7b158c57b65829ac4d590056a96483871a7c7c92';

    constructor(private _http: Http){
        console.log('-->API Service component is Ready...');
       this.endpoint="http://localhost:8080/"; 
         
     this.username = 'monukanyal';
    }
    
    VerifyUser(parameters){
        

        let api=this.endpoint+'apilogin'; 
        console.log(this.endpoint+'apilogin');
        console.log(parameters);
       // return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            //.map(res => res.json());
        let data = new URLSearchParams();
        data.append('username', parameters.email);
        data.append('password', parameters.password);

     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
     let options = new RequestOptions({ headers: headers});
      return this._http.post(api,data,options)
          .map(res => res.json());
          //.catch(this.handleError);
  }


    // updateUser(username)
    // {
    //       this.username=username;
    // }
}
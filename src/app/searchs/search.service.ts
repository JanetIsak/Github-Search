import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  private username:string;
  private clientid ='673683bfe0fff4d3763a';
  private clientsecret ='51dbc33787fda47d0acb89bbd3a2dcb73e8830da';

  constructor(private http:Http) {
    console.log("service is no ready!");
    this.username='JanetIsak';
    }
   getSearchService(){
     return this.http.get("https://api.github.com/users/" + this.username +"?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res =>res.json());
   }

   getUserRepos(){
     return this.http.get("https://api.github.com/users/" + this.username +"/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res =>res.json());
   }

   updateUserData(username:string){
     this.username = username;
}
}

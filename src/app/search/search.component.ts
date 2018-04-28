import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  githubUser:string
  apiKey:string="25f521bc0a2ee910ef9b1f03889f3f4ad50da2b3"
  userLink:string="https://api.github.com/users/"
  link:string
  userdata:string

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  logIn(){
    this.link=this.userLink+this.githubUser+"?access_token="+this.apiKey
    this.http.get(this.link).subscribe((response:any)=>{
      this.userdata=response
      console.log(this.userdata)

    }

  }

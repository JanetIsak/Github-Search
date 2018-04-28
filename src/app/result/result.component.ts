import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  githubUser:string
  apiKey:string="25f521bc0a2ee910ef9b1f03889f3f4ad50da2b3"
  userLink:string="https://api.github.com/users/"
  link:string
  userdata:string

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  searchUser(){
    this.link=this.userLink+this.githubUser+"?access_token="+this.apiKey
    this.http.get(this.link).subscribe((response:any)=>{
      this.userdata=response
      console.log(this.userdata)
}

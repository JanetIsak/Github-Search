import { Component, OnInit } from '@angular/core';
import {SearchService} from '../searchs/search.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

userData:any[];
repos:any[];
username:string;

  constructor(private searchService:SearchService) {

  }

  findUserData() {
    this.searchService.updateUserData(this.username);
    this.searchService.getSearchService().subscribe(userData => {
      console.log(userData);
      this.userData=userData;
    });
    this.searchService.getUserRepos().subscribe(repos => {
      console.log(repos);
      this.repos=repos;
    });
  }

ngOnInit() {

}

}

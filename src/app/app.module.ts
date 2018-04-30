import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {SearchService} from './searchs/search.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
// import { NotFoundComponent} from './notfound/notfound.component';

const routes:Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'search', component:SearchComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
  // {path: '**', component:NotFoundComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    // NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

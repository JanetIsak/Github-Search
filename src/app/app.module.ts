import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
// import { NotFoundComponent} from './notfound/notfound.component';

const routes:Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'search', component:SearchComponent},
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
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

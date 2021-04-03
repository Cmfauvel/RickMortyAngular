import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLocationsComponent,
    NavbarComponent,
    ListEpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([{path:'', component : AppComponent},
    {path:'locations/:page', component : ListLocationsComponent},
    {path:'episodes/:page', component : ListEpisodesComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

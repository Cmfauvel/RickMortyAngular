import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListLocationsComponent } from './list-locations/list-locations.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListLocationsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot([{path:'', component : AppComponent},
    {path:'locations/:page', component : ListLocationsComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

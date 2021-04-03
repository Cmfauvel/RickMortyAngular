import { Component } from '@angular/core';
import { ListLocationsComponent } from './list-locations/list-locations.component'
import { AppRoutingModule } from './app-routing.module'
import { ListEpisodesComponent } from './list-episodes/list-episodes.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RickMortyApp';
}

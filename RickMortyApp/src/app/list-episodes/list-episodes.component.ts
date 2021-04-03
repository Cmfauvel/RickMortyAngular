import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent implements OnInit {

  episodes= [{name: ""}];
  isLoading = true;
  constructor(private rmService: RickMortyService) {}

  ngOnInit() {
    this.rmService.getData().subscribe((data: any) => {
      this.episodes = data.results;
      this.isLoading = false;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { urls } from 'src/urls';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-locations',
  templateUrl: './list-locations.component.html',
  styleUrls: ['./list-locations.component.scss']
})

export class ListLocationsComponent implements OnInit {
  urls = urls;
  locations = [{ name : "", id : "", dimension : "", type : "", created : ""}];
  
  // Create an Observable out of a promise
  data: any;
  place = { name : "", id : "", dimension : "", type : "", created : ""};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    // const locations = String(routeParams.get('uri'));
    //fetch avec ajax
    this.data = ajax(urls.locations);
    // Subscribe to create the request
    //mieux vaut créer un .service.ts pour pouvoir faire le fetch
    this.data.subscribe((res: any) => {
      const tabDataLocation = res.response.results;
      this.place = tabDataLocation.find((location:any) => location.id)
      this.locations = tabDataLocation;
            console.log(this.locations, this.place.name)
      // const idPage = Number(routeParams.get('pageId'))
      // console.log(idPage)
      // this.page = urls.find(url => tabDataLocation.id === id);
    });
  // Find the page that correspond with the uri provided in route.
  // this.place = tabDataLocation.find( place => tabDataLocation.id === id);
  }
  
}

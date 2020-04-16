import { MockService } from './../../Shared/services/mock.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = "angular9";

  lat: number = 40.713829;
  lng: number = -73.989667;
  selectedMarker;
  markers: any = [];
  name: string;
  restuarantId: number;
  infoWindowIsOpen: boolean = false;
  openedWindow: number = 0;
  constructor(private mock: MockService) {

  }
  ngOnInit() {
    this.getMap()
  }

  // function for map displaying
  getMap() {
    this.mock.getData().subscribe(data => {
      this.markers = data.restaurants
      data.restaurants.map(data => {
        // behab=viour subject call
        this.mock.getRestuarant.subscribe(resp => {
          this.restuarantId = Number(resp)
          this.name = resp['name']
          this.restuarantId = Number(resp['id'])
          this.openWindow(this.restuarantId)
        })
      })
    })
  }


  // get max cordinate
  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }
  // get min cordinate
  min(coordType: 'lat' | 'lng'): number {

    return Math.min(...this.markers.map(marker => marker[coordType]));
  }
 
  // on open window informaation
  isInfoWindowOpen(id) {
    return this.openedWindow == id;
  }
  
  // on marker click
  openWindow(id) {
    this.openedWindow = id;
  }


}

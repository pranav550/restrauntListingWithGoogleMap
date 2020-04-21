import { MockService } from './../../Shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { Restaunt } from './../../Shared/models/restraunt';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = "angular9";

  lati: number = 40.713829;
  lngi: number = -73.989667;
  markerss: Restaunt[];
  name: string;
  restuarantId: number;
  openedWindows: number;
  constructor(private mock: MockService) {

  }
  ngOnInit() {
    this.getMap()
  }

  // function for map displaying
  public getMap(): void {
    this.mock.getData().subscribe(data => {
      this.markerss = data['restaurants']
      data['restaurants'].map(data => {
        // behaviour subject call
       this.getSelectedRestaurantId()
      })
    })
  }

  // function for selected resturant Id
  public getSelectedRestaurantId(){
    this.mock.getRestuarant.subscribe(resp => {
      this.name = resp['name']
      this.restuarantId = Number(resp['id'])
      this.openWindow(this.restuarantId)
    })
  }


  // get max cordinate
  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markerss.map(marker => marker[coordType]));
  }
  // get min cordinate
  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markerss.map(marker => marker[coordType]));
  }

  // on open window informaation
  isInfoWindowOpen(id) {
    return this.openedWindows == id;
  }

  // on marker click
  public openWindow(id) {
    this.openedWindows = id;
  }


}

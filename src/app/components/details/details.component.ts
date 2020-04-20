import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaunt } from './../../Shared/models/restraunt';
import { MockService } from './../../Shared/services/mock.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  restuarantId: number;
  restaurantObj: any={}
  product: Restaunt;
  isDisplay: boolean = false;
  rating: number;
  starList: boolean[] = [];


  constructor(
    public route: ActivatedRoute,
    private mock: MockService) {
  }

  ngOnInit() {
    this.getSelectedRestuarant()
  }

  // function for selected information details
public getSelectedRestuarant(): void {
    // get nehaviour subject call
    this.mock.getRestuarant.subscribe(resp => {
      if (resp['id'] != undefined) {
        this.restuarantId = Number(resp['id'])

        // get service call
        this.mock.getData().subscribe(data => {
          data.restaurants.filter(data1 => {
           if (data1.id === this.restuarantId) {
              this.isDisplay = true
              this.restaurantObj = data1
              // -------rating start--------
              this.starList = []
              this.rating = data1.rating
              for (let j = 0; j < this.rating; j++) {
                this.starList.push(true);
              }
              for (let k = 0; k < 5 - this.rating; k++) {
                this.starList.push(false);
              }
              // ---------rating end-----------
            }
          })
        })
      }
    })
  }

 public closeButton() {
    this.isDisplay = false
  }

}

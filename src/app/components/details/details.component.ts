import { MockService } from './../../Shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  restuarantId: number;
  restuarantName: string
  speciality: string
  desc: string;
  service1: string;
  service2: string;
  sub: any;
  product: any;
  isDisplay: boolean = false;
  rating: number;
  starList: boolean[] = [];
  address: string;
  hours: string;
  phone: string;
  reviews: any[];

  constructor(
    public route: ActivatedRoute,
    private mock: MockService) {
  }

  ngOnInit() {
    this.getSelectedRestuarant()
  }

  // function for selected information details
  getSelectedRestuarant() {
    // get nehaviour subject call
    this.mock.getRestuarant.subscribe(resp => {
      if (resp['id'] != undefined) {
        this.restuarantId = Number(resp['id'])

        // get service call
        this.mock.getData().subscribe(data => {
          data.restaurants.filter(data1 => {
            if (data1.id === this.restuarantId) {
              this.isDisplay = true
              this.restuarantName = data1.name
              this.speciality = data1.seciality
              this.desc = data1.desc;
              this.service1 = data1.service1
              this.service2 = data1.service2
              this.address = data1.address
              this.hours = data1.operating_hours
              this.phone
              this.reviews = data1.reviews

              // rating start
              this.starList = []
              this.rating = data1.rating
              for (let j = 0; j < this.rating; j++) {
                this.starList.push(true);
              }
              for (let k = 0; k < 5 - this.rating; k++) {
                this.starList.push(false);
              }
                // rating end

            }

          })
        })
      }

    })



  }

  closeButton() {
    this.isDisplay = false
  }

}

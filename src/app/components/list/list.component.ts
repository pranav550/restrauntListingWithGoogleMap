import { MockService } from './../../Shared/services/mock.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoading: boolean = true;
  restaurants: any[];
  rating: number;
  starList: boolean[] = [];
  initialValue: number = 0;

  constructor(
    private mock: MockService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListing()
  }

  // function for listing the panel
  getListing() {
    this.isLoading = true;
    this.mock.getData().subscribe(data => {
      this.isLoading = false;
      this.restaurants = data.restaurants
      // rating
      data.restaurants.map(data => {
        this.rating = data.rating
        for (let j = 0; j < this.rating; j++) {
          this.starList.push(true);
        }
        for (let k = 0; k < 5 - this.rating; k++) {
          this.starList.push(false);
        }
      })

    })
  }
  
  // function for selected restraunt
  selectedRestuarant(event) {
    // console.log(event)
    this.mock.restuarantInfo.next(event);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Restaunt } from './../../Shared/models/restraunt';
import { MockService } from './../../Shared/services/mock.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isLoading: boolean = true;
  restaurants: Restaunt[];
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
  public getListing(): void {
    this.isLoading = true;
    this.mock.getData().subscribe(data => {
      this.isLoading = false;
      this.restaurants = data.restaurants
      //------ rating start-----------
      data.restaurants.map(data => {
        this.rating = data.rating
        for (let j = 0; j < this.rating; j++) {
          this.starList.push(true);
        }
        for (let k = 0; k < 5 - this.rating; k++) {
          this.starList.push(false);
        }
      })
      // --------rating end-------
    })
  }

  // function for selected restraunt
 public selectedRestuarant(event:MouseEvent): void {
    this.mock.restuarantInfo.next(event);
  }

}

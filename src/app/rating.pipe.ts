import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(atms:boolean[], page: number): any {
    let data: [] = [];
    let index= 0;
    let per_page = 5;

    for (let atm of atms) {
      if (index >= (page * per_page) && index < (page + 1) * per_page) {
        console.log(index);
        data.push();
        index++;
      }
    }

    return data;

  }

}

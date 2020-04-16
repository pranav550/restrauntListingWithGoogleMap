import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
   return this.http.get('../../assets/data.json')
  }

  restuarantInfo= new BehaviorSubject({});
    getRestuarant=this.restuarantInfo.asObservable();
}

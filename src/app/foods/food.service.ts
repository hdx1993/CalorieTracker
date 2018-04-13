import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { food } from './food';
import 'rxjs/add/operator/map';

@Injectable()
export class foodService {

  constructor(private http: Http) { }

  getAllitem() {
    return this.http.get('assets/foods.json')
          .map(response => <food[]>response.json().foodsData);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const queryString = require('query-string');

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url = 'http://localhost:3000/cities';

  constructor(private http: HttpClient) { }

  getData({ city, state, country }): Observable<any> {
    const cityName = city;
    return this.http.get([
      this.url,
      '/',
      cityName,
      '?',
      queryString.stringify({
        state,
        country
      })
    ].join(''));
  }
}

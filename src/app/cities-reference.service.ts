import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const querySting = require('query-string');

@Injectable({
  providedIn: 'root'
})
export class CitiesReferenceService {

  url = 'http://localhost:3000/cities'

  constructor (private http: HttpClient) { }

  getCities ({ state, country }) : Observable<any> {
    return this.http.get([
      this.url,
      '?',
      querySting.stringify({
        state: state,
        country: country
      })
    ].join(''))
  }
}

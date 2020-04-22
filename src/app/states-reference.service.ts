import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const queryString = require('query-string')


@Injectable({
  providedIn: 'root'
})
export class StatesReferenceService {

  url = 'http://localhost:3000/states';
  qs = '?';

  constructor (private http: HttpClient) { }

  getStates ({ country }) : Observable<any> {
    return this.http.get([
      this.url,
      this.qs,
      queryString.stringify({ country: country })
    ].join(''));
  }

}

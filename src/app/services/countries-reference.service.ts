import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountriesReferenceService {

  url = 'http://localhost:3000/countries';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(this.url);
  }
}

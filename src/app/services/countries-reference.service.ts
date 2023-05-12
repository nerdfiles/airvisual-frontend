/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
/**
 * CountriesReferenceService.
 */
export class CountriesReferenceService {
  /**
   * @constant
   */ 
  URL = 'http://localhost:3000/countries'

  /**
   * constructor.
   *
   * @param {HttpClient} http
   */
  constructor (private http: HttpClient) {}

  /**
   * getCountries.
   *
   * @returns {Observable<any>}
   */
  getCountries (): Observable<any> {
    return this.http.get(this.URL)
  }
}

/// EOF

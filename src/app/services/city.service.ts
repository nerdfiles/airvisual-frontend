/**
 * @version wtfpl, version 2
 * @author aha
 * @description .
 */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
const queryString = require('query-string')

@Injectable({
  providedIn: 'root'
})
export class CityService {

  URL = 'http://localhost:3000/cities'

  /**
   * constructor.
   *
   * @param {HttpClient} http
   */
  constructor (private http: HttpClient) { }

  /**
   * getData.
   *
   * @param {}
   * @returns {Observable<any>}
   */
  getData ({ city, state, country }): Observable<any> {
    const cityName = city
    const PROMPT = '?'
    const GLUE = ''
    const URL = [
      this.URL,
      '/',
      cityName,
      PROMPT,
      querySting.stringify({
        state,
        country
      })
    ].join(GLUE)
    return this.http.get(URL)
  }
}

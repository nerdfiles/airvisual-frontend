import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
const querySting = require('query-string')

@Injectable({
  providedIn: 'root'
})
export class CitiesReferenceService {
  /**
   * @constant
   */
  URL = 'http://localhost:3000/cities'

  /**
   * constructor.
   *
   * @param {HttpClient} http
   */
  constructor (private http: HttpClient) { }

  /**
   * getCities.
   *
   * @param {}
   * @returns {Observable<any>}
   */
  getCities ({ state, country }): Observable<any> {
    const PROMPT = '?'
    const GLUE = ''
    const URL = [
      this.URL,
      PROMPT,
      querySting.stringify({
        state,
        country
      })
    ].join(GLUE)
    return this.http.get(URL)
  }
}

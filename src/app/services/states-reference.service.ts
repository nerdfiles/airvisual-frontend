/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
const queryString = require('query-string')


@Injectable({
  providedIn: 'root'
})
/**
 * StatesReferenceService.
 */
export class StatesReferenceService {
  /**
   * @constant
   */
  URL = 'http://localhost:3000/states'

  /**
   * @constant
   */
  QUERY = '?'

  /**
   * constructor.
   *
   * @param {HttpClient} http
   */
  constructor (private http: HttpClient) { }

  /**
   * getStates.
   *
   * @param {}
   * @returns {Observable<any>}
   */
  getStates ({ country }): Observable<any> {
    const PAYLOAD = [
      this.URL,
      this.QUERY,
      queryString.stringify({ country })
    ].join('')
    return this.http.get(PAYLOAD)
  }
}

/// EOF

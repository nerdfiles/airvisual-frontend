/**
 * @version wtfpl, version 2
 * @author aha
 * @description .
 */
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  /**
   * getSession.
   *
   * @param {string} key
   * @returns {any}
   */
  getSession (key: string): any {
    const data = window.sessionStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    } else {
      return null
    }
  }

  /**
   * setSession.
   *
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  setSession (key: string, value: any): void {
    const data = value === undefined ? '' : JSON.stringify(value)
    window.sessionStorage.setItem(key, data)
  }

  /**
   * removeSession.
   *
   * @param {string} key
   * @returns {void}
   */
  removeSession (key: string): void {
    window.sessionStorage.removeItem(key)
  }

  /**
   * removeAllSessions.
   *
   * @returns {void}
   */
  removeAllSessions (): void {
    for (const key in window.sessionStorage) {
      if (window.sessionStorage.hasOwnProperty(key)) {
        this.removeSession(key)
      }
    }
  }

  /**
   * getLocal.
   *
   * @param {string} key
   * @returns {any}
   */
  getLocal (key: string): any {
    const data = window.localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    } else {
      return null
    }
  }

  /**
   * setLocal.
   *
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */
  setLocal (key: string, value: any): void {
    const isUndefined = (value === undefined)
    const data = isUndefined ? '' 
                             : JSON.stringify(value)
    window.localStorage.setItem(key, data)
  }

  /**
   * removeLocal.
   *
   * @param {string} key
   * @returns {void}
   */
  removeLocal (key: string): void {
    window.localStorage.removeItem(key)
  }

  /**
   * removeAllLocals.
   *
   * @returns {void}
   */
  removeAllLocals (): void {
    for (const key in window.localStorage) {
      if (window.localStorage.hasOwnProperty(key)) {
        this.removeLocal(key)
      }
    }
  }
}

/// EOF

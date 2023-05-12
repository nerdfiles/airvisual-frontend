/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { Component } from '@angular/core'

import store from '../../store/index'
import { getData } from '../../actions/index'

const log = console.log

/**
 * @constant
 * @description .
 */
const URL = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly'

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  articles: any[] = []

  constructor() {
    store.subscribe(() => {
      const data = store.getState()
      this.articles = data.articles
      log(data)
    })

    store.dispatch(getData(URL))
  }
}

/// EOF

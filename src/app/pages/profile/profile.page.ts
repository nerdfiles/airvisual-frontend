import { Component } from '@angular/core';

import store from '../../store/index';
import { getData } from '../../actions/index';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  articles: any[] = [];

  constructor() {
    store.subscribe(() => {
      const data = store.getState();
      this.articles = data.articles;
      console.log(data)
    });

    const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly';
    store.dispatch(getData(url));
  }

}

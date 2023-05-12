/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { Component } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
/**
 * AppComponent.
 */
export class AppComponent {
  /**
   * constructor.
   *
   * @param {Platform} platform
   * @param {SplashScreen} splashScreen
   * @param {StatusBar} statusBar
   */
  constructor (private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp()
  }

  /**
   * initializeApp.
   */
  initializeApp () {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }
}

/// EOF

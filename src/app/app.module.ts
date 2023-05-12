/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

/**
 * @constant
 */
const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  IonicModule.forRoot(),
  AppRoutingModule
]

/**
 * @constant
 */
const PROVIDER_LIST = [
  StatusBar,
  SplashScreen,
  {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }
]

/**
 * @constant
 */
const BOOT = [AppComponent]

/**
 * @constant
 */
const ENTRY = []

/**
 * @constant
 */
const DECLARATIONS = [AppComponent]

@NgModule({
  declarations: DECLARATIONS,
  entryComponents: ENTRY,
  imports: IMPORTS,
  providers: PROVIDER_LIST,
  bootstrap: BOOT
})
/**
 * AppModule.
 */
export class AppModule {}

/// EOF

/**
 * @author aha
 * @version wtfpl, version 2
 * @description .
 */
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

const MODE = environment.production

MODE && enableProdMode()

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err))

/// EOF

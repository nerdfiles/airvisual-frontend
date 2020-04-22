import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherPage } from './weather.page';

import { WeatherPageRoutingModule } from './weather-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WeatherPageRoutingModule
  ],
  declarations: [WeatherPage]
})
export class WeatherPageModule {}

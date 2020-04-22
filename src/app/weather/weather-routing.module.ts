import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherPage } from './weather.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'configure',
        loadChildren: () =>
          import('../../pages/configure/configure.module')
            .then(m => m.ConfigurePageModule)
      },
      {
        path: 'weather',
        loadChildren: () =>
          import('../../pages/weather/weather.module')
            .then(m => m.WeatherPageModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module')
            .then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/configure',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/configure',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

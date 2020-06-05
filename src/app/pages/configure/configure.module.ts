import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfigurePage } from './configure.page';
import { ChildComponentComponent } from '../../child-component/child-component.component';
import { ParentComponentComponent } from '../../parent-component/parent-component.component';
import { ConfigurePageRoutingModule } from './configure-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConfigurePageRoutingModule
  ],
  declarations: [
    ConfigurePage,
    ParentComponentComponent,
    ChildComponentComponent
  ]
})
export class ConfigurePageModule {}

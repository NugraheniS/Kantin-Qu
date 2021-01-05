import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogindistributorPageRoutingModule } from './logindistributor-routing.module';

import { LogindistributorPage } from './logindistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogindistributorPageRoutingModule
  ],
  declarations: [LogindistributorPage]
})
export class LogindistributorPageModule {}

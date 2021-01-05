import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporandistributorPageRoutingModule } from './laporandistributor-routing.module';

import { LaporandistributorPage } from './laporandistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporandistributorPageRoutingModule
  ],
  declarations: [LaporandistributorPage]
})
export class LaporandistributorPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuktipembayaranPageRoutingModule } from './buktipembayaran-routing.module';

import { BuktipembayaranPage } from './buktipembayaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuktipembayaranPageRoutingModule
  ],
  declarations: [BuktipembayaranPage]
})
export class BuktipembayaranPageModule {}

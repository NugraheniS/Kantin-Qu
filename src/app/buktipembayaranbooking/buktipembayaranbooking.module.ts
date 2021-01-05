import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuktipembayaranbookingPageRoutingModule } from './buktipembayaranbooking-routing.module';

import { BuktipembayaranbookingPage } from './buktipembayaranbooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuktipembayaranbookingPageRoutingModule
  ],
  declarations: [BuktipembayaranbookingPage]
})
export class BuktipembayaranbookingPageModule {}

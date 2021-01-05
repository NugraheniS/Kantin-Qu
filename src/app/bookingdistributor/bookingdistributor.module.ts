import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingdistributorPageRoutingModule } from './bookingdistributor-routing.module';

import { BookingdistributorPage } from './bookingdistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingdistributorPageRoutingModule
  ],
  declarations: [BookingdistributorPage]
})
export class BookingdistributorPageModule {}

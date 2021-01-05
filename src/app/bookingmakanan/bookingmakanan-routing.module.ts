import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingmakananPage } from './bookingmakanan.page';

const routes: Routes = [
  {
    path: '',
    component: BookingmakananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingmakananPageRoutingModule {}

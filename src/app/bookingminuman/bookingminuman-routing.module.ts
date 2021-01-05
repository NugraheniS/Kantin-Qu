import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingminumanPage } from './bookingminuman.page';

const routes: Routes = [
  {
    path: '',
    component: BookingminumanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingminumanPageRoutingModule {}

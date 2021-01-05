import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingdistributorPage } from './bookingdistributor.page';

const routes: Routes = [
  {
    path: '',
    component: BookingdistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingdistributorPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuktipembayaranbookingPage } from './buktipembayaranbooking.page';

const routes: Routes = [
  {
    path: '',
    component: BuktipembayaranbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuktipembayaranbookingPageRoutingModule {}

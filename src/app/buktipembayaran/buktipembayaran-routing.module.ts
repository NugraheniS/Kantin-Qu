import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuktipembayaranPage } from './buktipembayaran.page';

const routes: Routes = [
  {
    path: '',
    component: BuktipembayaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuktipembayaranPageRoutingModule {}

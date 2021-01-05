import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaksibookingPage } from './transaksibooking.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksibookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksibookingPageRoutingModule {}

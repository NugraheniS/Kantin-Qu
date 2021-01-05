import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmenubookingPage } from './detailmenubooking.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmenubookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmenubookingPageRoutingModule {}

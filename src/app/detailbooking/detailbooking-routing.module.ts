import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailbookingPage } from './detailbooking.page';

const routes: Routes = [
  {
    path: '',
    component: DetailbookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailbookingPageRoutingModule {}

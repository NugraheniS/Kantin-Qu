import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesanandistributorPage } from './pesanandistributor.page';

const routes: Routes = [
  {
    path: '',
    component: PesanandistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesanandistributorPageRoutingModule {}

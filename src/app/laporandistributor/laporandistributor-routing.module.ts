import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporandistributorPage } from './laporandistributor.page';

const routes: Routes = [
  {
    path: '',
    component: LaporandistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporandistributorPageRoutingModule {}

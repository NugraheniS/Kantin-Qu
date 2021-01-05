import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogindistributorPage } from './logindistributor.page';

const routes: Routes = [
  {
    path: '',
    component: LogindistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogindistributorPageRoutingModule {}

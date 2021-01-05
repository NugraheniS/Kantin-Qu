import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterdistributorPage } from './registerdistributor.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterdistributorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterdistributorPageRoutingModule {}

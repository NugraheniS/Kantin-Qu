import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananminumanPage } from './pesananminuman.page';

const routes: Routes = [
  {
    path: '',
    component: PesananminumanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananminumanPageRoutingModule {}

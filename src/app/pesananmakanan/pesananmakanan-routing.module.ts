import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananMakananPage } from './pesananmakanan.page';

const routes: Routes = [
  {
    path: '',
    component: PesananMakananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananmakananPageRoutingModule {}

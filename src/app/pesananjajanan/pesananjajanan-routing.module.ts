import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananjajananPage } from './pesananjajanan.page';

const routes: Routes = [
  {
    path: '',
    component: PesananjajananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananjajananPageRoutingModule {}

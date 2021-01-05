import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahmakananPage } from './tambahmakanan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahmakananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahmakananPageRoutingModule {}

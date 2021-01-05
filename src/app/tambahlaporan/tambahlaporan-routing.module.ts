import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahlaporanPage } from './tambahlaporan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahlaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahlaporanPageRoutingModule {}

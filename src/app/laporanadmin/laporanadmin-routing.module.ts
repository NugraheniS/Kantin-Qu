import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporanadminPage } from './laporanadmin.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanadminPageRoutingModule {}

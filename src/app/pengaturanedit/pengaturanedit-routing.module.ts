import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturaneditPage } from './pengaturanedit.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturaneditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturaneditPageRoutingModule {}

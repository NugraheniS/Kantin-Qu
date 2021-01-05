import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Laporanadmin2Page } from './laporanadmin2.page';

const routes: Routes = [
  {
    path: '',
    component: Laporanadmin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Laporanadmin2PageRoutingModule {}

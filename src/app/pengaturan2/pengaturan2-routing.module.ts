import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pengaturan2Page } from './pengaturan2.page';

const routes: Routes = [
  {
    path: '',
    component: Pengaturan2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pengaturan2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pengaturanedit2Page } from './pengaturanedit2.page';

const routes: Routes = [
  {
    path: '',
    component: Pengaturanedit2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pengaturanedit2PageRoutingModule {}

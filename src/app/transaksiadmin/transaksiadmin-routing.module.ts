import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaksiadminPage } from './transaksiadmin.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksiadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiadminPageRoutingModule {}

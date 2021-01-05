import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KantinbunurulPage } from './kantinbunurul.page';

const routes: Routes = [
  {
    path: '',
    component: KantinbunurulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KantinbunurulPageRoutingModule {}

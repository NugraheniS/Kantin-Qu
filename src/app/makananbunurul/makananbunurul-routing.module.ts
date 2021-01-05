import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananbunurulPage } from './makananbunurul.page';

const routes: Routes = [
  {
    path: '',
    component: MakananbunurulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananbunurulPageRoutingModule {}

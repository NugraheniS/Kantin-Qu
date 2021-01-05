import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailmenuPage } from './detailmenu.page';

const routes: Routes = [
  {
    path: '',
    component: DetailmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailmenuPageRoutingModule {}

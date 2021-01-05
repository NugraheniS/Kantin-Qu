import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenumakananPage } from './menumakanan.page';

const routes: Routes = [
  {
    path: '',
    component: MenumakananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenumakananPageRoutingModule {}

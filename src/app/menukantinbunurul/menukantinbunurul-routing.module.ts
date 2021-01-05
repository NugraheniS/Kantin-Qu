import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenukantinbunurulPage } from './menukantinbunurul.page';

const routes: Routes = [
  {
    path: '',
    component: MenukantinbunurulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenukantinbunurulPageRoutingModule {}

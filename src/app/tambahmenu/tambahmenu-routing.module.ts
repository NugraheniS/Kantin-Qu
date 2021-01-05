import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahmenuPage } from './tambahmenu.page';

const routes: Routes = [
  {
    path: '',
    component: TambahmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahmenuPageRoutingModule {}

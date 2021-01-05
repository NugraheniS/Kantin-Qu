import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditlaporanPage } from './editlaporan.page';

const routes: Routes = [
  {
    path: '',
    component: EditlaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditlaporanPageRoutingModule {}

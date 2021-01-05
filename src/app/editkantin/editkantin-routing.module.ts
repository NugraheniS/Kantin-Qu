import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditKantinPage } from './editkantin.page';

const routes: Routes = [
  {
    path: '',
    component: EditKantinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditkantinPageRoutingModule {}

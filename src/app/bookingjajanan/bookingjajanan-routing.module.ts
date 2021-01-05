import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingjajananPage } from './bookingjajanan.page';

const routes: Routes = [
  {
    path: '',
    component: BookingjajananPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingjajananPageRoutingModule {}

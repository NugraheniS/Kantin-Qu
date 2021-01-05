import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lupakatasandi2Page } from './lupakatasandi2.page';

const routes: Routes = [
  {
    path: '',
    component: Lupakatasandi2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lupakatasandi2PageRoutingModule {}

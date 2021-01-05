import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lupakatasandi3Page } from './lupakatasandi3.page';

const routes: Routes = [
  {
    path: '',
    component: Lupakatasandi3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lupakatasandi3PageRoutingModule {}

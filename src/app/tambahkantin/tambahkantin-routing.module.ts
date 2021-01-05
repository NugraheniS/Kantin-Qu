import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TambahKantinPage} from './tambahkantin.page'


const routes: Routes = [
  {
    path: '',
    component: TambahKantinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahkantinPageRoutingModule {}

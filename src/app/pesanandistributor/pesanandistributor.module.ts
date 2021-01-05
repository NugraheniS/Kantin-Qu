import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesanandistributorPageRoutingModule } from './pesanandistributor-routing.module';

import { PesanandistributorPage } from './pesanandistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesanandistributorPageRoutingModule
  ],
  declarations: [PesanandistributorPage]
})
export class PesanandistributorPageModule {}

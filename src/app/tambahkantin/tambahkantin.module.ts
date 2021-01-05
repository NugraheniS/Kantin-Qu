import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahkantinPageRoutingModule } from './tambahkantin-routing.module';

import { TambahKantinPage } from './tambahkantin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahkantinPageRoutingModule
  ],
  declarations: [TambahKantinPage]
})
export class TambahkantinPageModule {}

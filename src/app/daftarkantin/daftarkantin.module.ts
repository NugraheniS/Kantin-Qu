import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarkantinPageRoutingModule } from './daftarkantin-routing.module';

import { DaftarKantinPage } from './daftarkantin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarkantinPageRoutingModule
  ],
  declarations: [DaftarKantinPage]
})
export class DaftarkantinPageModule {}

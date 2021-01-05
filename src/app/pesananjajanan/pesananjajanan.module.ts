import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananjajananPageRoutingModule } from './pesananjajanan-routing.module';

import { PesananjajananPage } from './pesananjajanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananjajananPageRoutingModule
  ],
  declarations: [PesananjajananPage]
})
export class PesananjajananPageModule {}

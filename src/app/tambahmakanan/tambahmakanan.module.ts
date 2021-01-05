import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahmakananPageRoutingModule } from './tambahmakanan-routing.module';

import { TambahmakananPage } from './tambahmakanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahmakananPageRoutingModule
  ],
  declarations: [TambahmakananPage]
})
export class TambahmakananPageModule {}

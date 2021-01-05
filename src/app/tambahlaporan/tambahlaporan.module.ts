import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahlaporanPageRoutingModule } from './tambahlaporan-routing.module';

import { TambahlaporanPage } from './tambahlaporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahlaporanPageRoutingModule
  ],
  declarations: [TambahlaporanPage]
})
export class TambahlaporanPageModule {}

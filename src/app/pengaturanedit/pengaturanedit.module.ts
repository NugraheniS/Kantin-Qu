import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturaneditPageRoutingModule } from './pengaturanedit-routing.module';

import { PengaturaneditPage } from './pengaturanedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturaneditPageRoutingModule
  ],
  declarations: [PengaturaneditPage]
})
export class PengaturaneditPageModule {}

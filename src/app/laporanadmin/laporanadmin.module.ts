import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanadminPageRoutingModule } from './laporanadmin-routing.module';

import { LaporanadminPage } from './laporanadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporanadminPageRoutingModule
  ],
  declarations: [LaporanadminPage]
})
export class LaporanadminPageModule {}

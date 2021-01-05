import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Laporanadmin2PageRoutingModule } from './laporanadmin2-routing.module';

import { Laporanadmin2Page } from './laporanadmin2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Laporanadmin2PageRoutingModule
  ],
  declarations: [Laporanadmin2Page]
})
export class Laporanadmin2PageModule {}

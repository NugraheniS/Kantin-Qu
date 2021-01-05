import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pengaturanedit2PageRoutingModule } from './pengaturanedit2-routing.module';

import { Pengaturanedit2Page } from './pengaturanedit2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pengaturanedit2PageRoutingModule
  ],
  declarations: [Pengaturanedit2Page]
})
export class Pengaturanedit2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pengaturan2PageRoutingModule } from './pengaturan2-routing.module';

import { Pengaturan2Page } from './pengaturan2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pengaturan2PageRoutingModule
  ],
  declarations: [Pengaturan2Page]
})
export class Pengaturan2PageModule {}

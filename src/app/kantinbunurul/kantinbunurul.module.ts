import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KantinbunurulPageRoutingModule } from './kantinbunurul-routing.module';

import { KantinbunurulPage } from './kantinbunurul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KantinbunurulPageRoutingModule
  ],
  declarations: [KantinbunurulPage]
})
export class KantinbunurulPageModule {}

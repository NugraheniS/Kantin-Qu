import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenukantinbunurulPageRoutingModule } from './menukantinbunurul-routing.module';

import { MenukantinbunurulPage } from './menukantinbunurul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenukantinbunurulPageRoutingModule
  ],
  declarations: [MenukantinbunurulPage]
})
export class MenukantinbunurulPageModule {}

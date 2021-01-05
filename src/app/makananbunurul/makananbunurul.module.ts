import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananbunurulPageRoutingModule } from './makananbunurul-routing.module';

import { MakananbunurulPage } from './makananbunurul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananbunurulPageRoutingModule
  ],
  declarations: [MakananbunurulPage]
})
export class MakananbunurulPageModule {}

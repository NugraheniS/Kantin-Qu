import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilihanloginPageRoutingModule } from './pilihanlogin-routing.module';

import { PilihanloginPage } from './pilihanlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilihanloginPageRoutingModule
  ],
  declarations: [PilihanloginPage]
})
export class PilihanloginPageModule {}

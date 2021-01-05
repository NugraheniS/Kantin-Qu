import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenumakananPageRoutingModule } from './menumakanan-routing.module';

import { MenumakananPage } from './menumakanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenumakananPageRoutingModule
  ],
  declarations: [MenumakananPage]
})
export class MenumakananPageModule {}

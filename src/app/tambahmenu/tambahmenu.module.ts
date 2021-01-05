import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahmenuPageRoutingModule } from './tambahmenu-routing.module';

import { TambahmenuPage } from './tambahmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahmenuPageRoutingModule
  ],
  declarations: [TambahmenuPage],
})
export class TambahmenuPageModule {}

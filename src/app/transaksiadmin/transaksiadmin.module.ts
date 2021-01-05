import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaksiadminPageRoutingModule } from './transaksiadmin-routing.module';

import { TransaksiadminPage } from './transaksiadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaksiadminPageRoutingModule
  ],
  declarations: [TransaksiadminPage]
})
export class TransaksiadminPageModule {}

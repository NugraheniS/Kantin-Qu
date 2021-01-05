import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananminumanPageRoutingModule } from './pesananminuman-routing.module';

import { PesananminumanPage } from './pesananminuman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananminumanPageRoutingModule
  ],
  declarations: [PesananminumanPage]
})
export class PesananminumanPageModule {}

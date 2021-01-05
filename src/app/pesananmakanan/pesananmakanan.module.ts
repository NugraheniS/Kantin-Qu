import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananmakananPageRoutingModule } from './pesananmakanan-routing.module';

import { PesananMakananPage} from './pesananmakanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananmakananPageRoutingModule
  ],
  declarations: [PesananMakananPage]
})
export class PesananmakananPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lupakatasandi2PageRoutingModule } from './lupakatasandi2-routing.module';

import { Lupakatasandi2Page } from './lupakatasandi2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lupakatasandi2PageRoutingModule
  ],
  declarations: [Lupakatasandi2Page]
})
export class Lupakatasandi2PageModule {}

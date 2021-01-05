import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lupakatasandi3PageRoutingModule } from './lupakatasandi3-routing.module';

import { Lupakatasandi3Page } from './lupakatasandi3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lupakatasandi3PageRoutingModule
  ],
  declarations: [Lupakatasandi3Page]
})
export class Lupakatasandi3PageModule {}

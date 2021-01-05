import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LupakatasandiPageRoutingModule } from './lupakatasandi-routing.module';

import { LupakatasandiPage } from './lupakatasandi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LupakatasandiPageRoutingModule
  ],
  declarations: [LupakatasandiPage]
})
export class LupakatasandiPageModule {}

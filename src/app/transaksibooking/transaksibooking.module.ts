import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaksibookingPageRoutingModule } from './transaksibooking-routing.module';

import { TransaksibookingPage } from './transaksibooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaksibookingPageRoutingModule
  ],
  declarations: [TransaksibookingPage]
})
export class TransaksibookingPageModule {}

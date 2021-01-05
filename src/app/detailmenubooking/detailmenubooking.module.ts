import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmenubookingPageRoutingModule } from './detailmenubooking-routing.module';

import { DetailmenubookingPage } from './detailmenubooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmenubookingPageRoutingModule
  ],
  declarations: [DetailmenubookingPage]
})
export class DetailmenubookingPageModule {}

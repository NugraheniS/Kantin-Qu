import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterdistributorPageRoutingModule } from './registerdistributor-routing.module';

import { RegisterdistributorPage } from './registerdistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterdistributorPageRoutingModule
  ],
  declarations: [RegisterdistributorPage]
})
export class RegisterdistributorPageModule {}

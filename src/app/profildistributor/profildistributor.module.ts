import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfildistributorPageRoutingModule } from './profildistributor-routing.module';

import { ProfildistributorPage } from './profildistributor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfildistributorPageRoutingModule
  ],
  declarations: [ProfildistributorPage]
})
export class ProfildistributorPageModule {}

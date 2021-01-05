import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditkantinPageRoutingModule } from './editkantin-routing.module';

import { EditKantinPage } from './editkantin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditkantinPageRoutingModule
  ],
  declarations: [EditKantinPage]
})
export class EditkantinPageModule {}

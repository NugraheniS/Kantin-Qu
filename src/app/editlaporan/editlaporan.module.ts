import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlaporanPageRoutingModule } from './editlaporan-routing.module';

import { EditlaporanPage } from './editlaporan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlaporanPageRoutingModule
  ],
  declarations: [EditlaporanPage]
})
export class EditlaporanPageModule {}

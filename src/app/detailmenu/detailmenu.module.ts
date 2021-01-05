import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailmenuPageRoutingModule } from './detailmenu-routing.module';

import { DetailmenuPage } from './detailmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailmenuPageRoutingModule
  ],
  declarations: [DetailmenuPage]
})
export class DetailmenuPageModule {}

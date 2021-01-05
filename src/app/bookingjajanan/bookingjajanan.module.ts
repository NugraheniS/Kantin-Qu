import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingjajananPageRoutingModule } from './bookingjajanan-routing.module';

import { BookingjajananPage } from './bookingjajanan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingjajananPageRoutingModule
  ],
  declarations: [BookingjajananPage]
})
export class BookingjajananPageModule {}

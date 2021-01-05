import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { PopoverlaporanComponent } from '../popoverlaporan/popoverlaporan.component';

@Component({
  selector: 'app-laporanadmin2',
  templateUrl: './laporanadmin2.page.html',
  styleUrls: ['./laporanadmin2.page.scss'],
})
export class Laporanadmin2Page implements OnInit {

  myToast:any;

  constructor(public popoverController: PopoverController) {}

  ngOnInit() { }

  async popclick(event){
    const popover = await this.popoverController.create({
      component: PopoverlaporanComponent,
      event
    });
    return await popover.present();
  }
}

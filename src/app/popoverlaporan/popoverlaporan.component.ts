import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-popoverlaporan',
  templateUrl: './popoverlaporan.component.html',
  styleUrls: ['./popoverlaporan.component.scss'],
})
export class PopoverlaporanComponent implements OnInit {

  constructor(
    public popoverController: PopoverController,
    private navCtrl: NavController
    ){}

    ngOnInit() {}

  tambahlaporan(){
    this.navCtrl.navigateForward('/tambahlaporan');
  }
  
  }
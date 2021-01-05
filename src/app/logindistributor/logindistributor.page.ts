import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthsService } from '../services/auths.service';

@Component({
  selector: 'app-logindistributor',
  templateUrl: './logindistributor.page.html',
  styleUrls: ['./logindistributor.page.scss'],
})
export class LogindistributorPage implements OnInit {
  email:string;
  password:string;

  constructor(
    private auth: AuthsService,
    private toastr: ToastController,
  ) { }

  ngOnInit() {
  }
  login(){
      if(this.email && this.password)
      {
        this.auth.signIn(this.email, this.password);

      } else{
        this.toast('Masukan email dan password anda', 'warning');
      }
    }
    async toast(message, status)
    {
        const toast = await this.toastr.create({
            message:message,
            position: 'top',
            color: status,
            duration:2000
        });
        toast.present();
     }
}


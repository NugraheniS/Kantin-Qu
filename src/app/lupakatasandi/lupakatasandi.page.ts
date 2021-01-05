import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoadingController, ToastController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-lupakatasandi',
  templateUrl: './lupakatasandi.page.html',
  styleUrls: ['./lupakatasandi.page.scss'],
})
export class LupakatasandiPage implements OnInit {
 email: string;

  constructor(
    private authFire: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
  ) { }

  ngOnInit() {
  }
    async resetpassword()
    {
      if(this.email)
      {
        const loading = await this.loadingCtrl.create({
          message: 'Please wait..',
          spinner: 'crescent',
          showBackdrop: true
        });
        loading.present();

        this.authFire.sendPasswordResetEmail(this.email).then((data)=> {
        loading.dismiss();
        this.toast('Silahkan check email anda', 'success');
        this.router.navigate(['/login']);
        })
        .catch((error)=> {
          loading.dismiss();
          this.toast(error.message, 'Terjadi Kesalahan');
        })
      } else {
        this.toast('Silahkan isi dengan benar', 'Ubah');
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
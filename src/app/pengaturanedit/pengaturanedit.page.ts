import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pengaturanedit',
  templateUrl: './pengaturanedit.page.html',
  styleUrls: ['./pengaturanedit.page.scss'],
})
export class PengaturaneditPage implements OnInit {

  userId: string;
  name: string;
  email: string;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.name = user.userName;
      this.email = user.userEmail;
    })
  }

  async updateProfile(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating..',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afs.collection('user').doc(this.userId).set({
      'userName': this.name,
      'userEmail': this.email,
      'editAt': Date.now()
    },{merge:true})
    .then(() => {
      loading.dismiss();
      this.toast('Update berhasil', 'success');
      this.router.navigate(['/pengaturan']);
    })
    .catch(error => {
      loading.dismiss();
      this.toast(error.message, 'danger');
    })
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

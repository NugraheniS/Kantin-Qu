import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthsService } from '../services/auths.service';

@Component({
  selector: 'app-pengaturanedit2',
  templateUrl: './pengaturanedit2.page.html',
  styleUrls: ['./pengaturanedit2.page.scss'],
})
export class Pengaturanedit2Page implements OnInit {

  usersId: string;
  name: string;
  kantin: string;
  email: string;

  constructor(
    private auths: AuthsService,
    private afs: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.auths.user$.subscribe(users => {
      this.usersId = users.usersId;
      this.name = users.usersName;
      this.kantin = users.usersKantin;
      this.email = users.usersEmail;
    })
  }

  async updateProfile(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating..',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afs.collection('users').doc(this.usersId).set({
      'usersName': this.name,
      'usersEmail': this.email,
      'usersKantin': this.kantin,
      'editAt': Date.now()
    },{merge:true})
    .then(() => {
      loading.dismiss();
      this.toast('Update berhasil', 'success');
      this.router.navigate(['/pengaturan2']);
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

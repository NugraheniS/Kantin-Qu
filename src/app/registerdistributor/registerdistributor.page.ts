import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoadingController, ToastController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-registerdistributor',
  templateUrl: './registerdistributor.page.html',
  styleUrls: ['./registerdistributor.page.scss'],
})
export class RegisterdistributorPage implements OnInit {
  name: string;
  email: string;
  kantin: string;
  password: string;

  constructor(
    private afs: AngularFirestore,
    private authFire: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
  ) { }

  ngOnInit() {
  }
  async registerdistributor()
  {
    if(this.name && this.email && this.kantin && this.password)
    {
      const loading = await this.loadingCtrl.create({
        message: 'loading..',
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();
      
      this.authFire.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
        data.user.sendEmailVerification();

        this.afs.collection('users').doc(data.user.uid).set({
          'usersId': data.user.uid,
          'usersName': this.name,
          'usersEmail': this.email,
          'usersKantin': this.kantin,
          'createdAt': Date.now()
        })
        .then(()=>{
          loading.dismiss();
          this.toast("Berhasil, Silahkan verifikasi email", "success");
          this.router.navigate(['/logindistributor']);
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
        })
      }else {
        this.toast('Silahkan isi dengan benar', 'danger');
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
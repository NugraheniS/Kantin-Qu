import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth'
import { LoadingController, ToastController } from '@ionic/angular';
import { Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
  })
  export class RegisterPage implements OnInit {
    name: string;
    email: string;
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
    async register()
    {
      if(this.name && this.email && this.password)
      {
        const loading = await this.loadingCtrl.create({
          message: 'loading..',
          spinner: 'crescent',
          showBackdrop: true
        });
        loading.present();
        
        this.authFire.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {
          data.user.sendEmailVerification();
  
          this.afs.collection('user').doc(data.user.uid).set({
            'userId': data.user.uid,
            'userName': this.name,
            'userEmail': this.email,
            'createdAt': Date.now()
          })
          .then(()=>{
            loading.dismiss();
            this.toast("Berhasil, Silahkan verifikasi email", "success");
            this.router.navigate(['/login']);
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

// import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFireAuth } from '@angular/fire/auth'
// import { LoadingController, ToastController } from '@ionic/angular';
// import { Router} from '@angular/router';
// import { AlertController } from '@ionic/angular';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.page.html',
//   styleUrls: ['./register.page.scss'],
// })
// export class RegisterPage implements OnInit {
//   name: string;
//   email: string;
//   password: string;

//   constructor(
//     private authFire: AngularFireAuth,
//     private afs: AngularFirestore,
//     private router: Router,
//     private loadingCtrl: LoadingController,
//     private toastr: ToastController,
//     public alertController: AlertController
//   ) { }

//   ngOnInit() {
//   }
//   async registrasi()
//   {
//     if(this.name && this.email && this.password)
//     {
//       const loading = await this.loadingCtrl.create({
//         message: 'loading..',
//         spinner: 'crescent',
//         showBackdrop: true
//       });
//       loading.present();
//       this.authFire.createUserWithEmailAndPassword(this.email, this.password).then((data)=> {

//         this.afs.collection('users').doc(data.user.uid).set({
//           'userId': data.user.uid,
//           'name': this.name,
//           'email': this.email,
//           'createdAt': Date.now()
//         });
//         data.user.sendEmailVerification();

//     })
//     .then(()=>{
//       loading.dismiss();
//       this.presentAlert("Anda berhasil", "Membuat Akun");
//       this.router.navigate(['/login']);
//     })
//     .catch((error)=>{
//       loading.dismiss();
//       this.presentAlert("Terjadi Kesalahan", error.message);
//     })
//   }else {
//     this.toast('Silahkan isi dengan benar', 'Terjadi Kesalahan');
//   }
//   }

// async toast(message, status)
//   {
//       const toast = await this.toastr.create({
//           message:message,
//           position: 'top',
//           color: status,
//           duration:2000
//       });
//       toast.present();
//    }
//    async presentAlert(header:string, message:string){
//     const alert = await this.alertController.create({
//       header,
//       message,
//       buttons: ['Selesai']
//     });

//     await alert.present();
//   }
//   }
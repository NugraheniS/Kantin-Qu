import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  password:string;

  constructor(
    private auth: AuthService,
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


// import { Component, OnInit } from '@angular/core';
// import { AlertController } from '@ionic/angular';
// import { Router } from '@angular/router';
// import firebase from '@firebase/app';
// import '@firebase/auth';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {

//   username:string='';
//   email:string='';
//   password:string='';
//   showPassword = false;
//   passwordToggleIcon = 'eye';
  
//   constructor(public alertController: AlertController, public router: Router) { }

//   ngOnInit() {
//   }

//   async login(){
//     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
//       (data)=>{
//         this.presentAlert("Selamat anda berhasil login", "Follow your dream");
//         this.router.navigate(['/pesananmakanan'])
//         console.log("Pendaftaran Berhasil")
//       }
//     ).catch((err: { message: string;})=>{
//       this.presentAlert("Error", err.message);
//       console.log(err)
//     })
  
// }

// async presentAlert(header:string, message:string) {
//   const alert = await this.alertController.create({
//     header,
//     message,
//     buttons: ['Selesai']
//   });

//   await alert.present();
// }

// togglePassword(): void {
//   this.showPassword = !this.showPassword;

//   if (this.passwordToggleIcon == 'eye') {
//       this.passwordToggleIcon = 'eye-off';
//   } else {
//     this.passwordToggleIcon = 'eye';
//   }
// }

// }



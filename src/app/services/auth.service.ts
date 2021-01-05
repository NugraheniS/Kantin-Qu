import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Router} from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  user:User;

  constructor(
    private afs: AngularFirestore,
    private authFire: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
  ) 
  { 
    this.user$ = this.authFire.authState.pipe(
      switchMap(user=>
        {
          if(user)
          {
            return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
    );
  } //end of contructor
  async signIn(email, password)
  {
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.authFire.setPersistence(firebase.default.auth.Auth.Persistence.LOCAL).then(()=> {

    this.authFire.signInWithEmailAndPassword(email, password).then((data)=> {
          if(!data.user.emailVerified)
          {
              loading.dismiss();
              this.toast('Please verify your email', 'danger')
              //this.signOut();
          } else {
              loading.dismiss();
              this.router.navigate(['/pesananmakanan']);
          }
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
      })
      .catch(error => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    });
  }

    async signOut()
    {
      const loading = await this.loadingCtrl.create({
        spinner: 'crescent',
        showBackdrop: true
      });
      loading.present();

        this.authFire.signOut().then(()=> {
            this.router.navigate(['/login']);
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


// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { User } from '../models/user';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Router} from '@angular/router';
// import { LoadingController, ToastController } from '@ionic/angular';
// import { switchMap } from 'rxjs/operators';

// @Injectable()
// export class AuthService {
//   user$: Observable<User>;
//   user:User;

//   constructor(
//     private authFire: AngularFireAuth,
//     private afs: AngularFirestore,
//     private router: Router,
//     private loadingCtrl: LoadingController,
//     private toastr: ToastController,
//    ) 
   
//    { 
//     this.user$ = this.authFire.authState.pipe(
//       switchMap(user=>
//         {
//           if(user)
//           {
//             this.afs.doc(`users/${user.uid}`).valueChanges();
//           } else {
//             return of(null);
//           }
//         })
//     );
//   } //end of contructor

//   async login(email, pass)
//   {
//     const loading = await this.loadingCtrl.create({
//       message: 'Authenticating..',
//       spinner: 'crescent',
//       showBackdrop: true
//     });
//     loading.present();

//     this.authFire.signInWithEmailAndPassword(email, pass).then((data)=> {
//           if(!data.user.emailVerified)
//           {
//               loading.dismiss();
//               this.toast('Please verify your email', 'danger')
//               this.logout();
//           } else {
//               loading.dismiss();
//               this.router.navigate(['/login']);
//           }
//         })
//     }

//     logout()
//     {
//         this.authFire.signOut().then(()=> {
//             this.router.navigate(['/login-form']);
//         })

//     }


//   async toast(message, status)
//   {
//       const toast = await this.toastr.create({
//           message:message,
//           position: 'top',
//           color: status,
//           duration:2000
//       });
//       toast.present();
//    }
// }

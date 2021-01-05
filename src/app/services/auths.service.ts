import { Injectable } from '@angular/core';
import { Users } from '../models/users';
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
export class AuthsService {
  user$: Observable<Users>;
  user:Users;

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
            return this.afs.doc<Users>(`users/${user.uid}`).valueChanges();
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
              this.router.navigate(['/pesanandistributor']);
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
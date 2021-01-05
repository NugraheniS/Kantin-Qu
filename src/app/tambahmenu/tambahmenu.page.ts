import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tambahmenu',
  templateUrl: './tambahmenu.page.html',
  styleUrls: ['./tambahmenu.page.scss'],
})
export class TambahmenuPage implements OnInit {

  title: string;
  status: string;
  price:number;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
  ) { }

  ngOnInit() {
  }
  async addMenu(){
    if(this.title && this.status)
    {
      const loading = await this.loadingCtrl.create({
          message:'add menu..',
          spinner: 'crescent',
          showBackdrop: true
      });
      loading.present();
      const menuId = this.afs.createId();

      this.afs.collection('menu').doc(menuId).set({
        'menuId': menuId,
        'title': this.title,
        'status': this.status,
        'price': this.price,
        'createdAt': Date.now()
      })      
      .then(()=> {
        loading.dismiss();
        this.toast('Menu berhasil ditambahkan','success');
        this.router.navigate(['/menumakanan']);
      })
      .catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      });
    }
  }  
  async toast(message, status)
    {
        const toast = await this.toastr.create({
            message: message,
            position: 'top',
            color: status,
            duration:2000
        });
        toast.present();
     }

    }

    
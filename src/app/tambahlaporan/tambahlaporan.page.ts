import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tambahlaporan',
  templateUrl: './tambahlaporan.page.html',
  styleUrls: ['./tambahlaporan.page.scss'],
})
export class TambahlaporanPage implements OnInit {

  title: string;
  desc: string;
  date: number; 
  amount: number;
  price:number;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,

  ) { }

  ngOnInit() {
  }
  async addLaporan(){
    if(this.title && this.desc && this.date)
    {
      const loading = await this.loadingCtrl.create({
          message:'add laporan..',
          spinner: 'crescent',
          showBackdrop: true
      });
      loading.present();
      const laporanId = this.afs.createId();

      this.afs.collection('laporan').doc(laporanId).set({
        'laporanId': laporanId,
        'title': this.title,
        'desc': this.desc,
        'date': this.date,
        'amount': this.amount,
        'price': this.price,
        'status': '',
        'createdAt': Date.now()
      })
      .then(()=> {
        loading.dismiss();
        this.toast('Laporan berhasil ditambahkan','success');
        this.router.navigate(['/laporanadmin']);
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
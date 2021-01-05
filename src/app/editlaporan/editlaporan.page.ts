import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LaporanService } from '../services/laporan.service';

@Component({
  selector: 'app-editlaporan',
  templateUrl: './editlaporan.page.html',
  styleUrls: ['./editlaporan.page.scss'],
  providers:[LaporanService]
})
export class EditlaporanPage implements OnInit {

  laporanId: string;
  title: string;
  desc: string;
  date: string;
  amount: number;
  price: number;

  constructor(
    private route: ActivatedRoute,
    private laporanService: LaporanService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {

    this.laporanId = this.route.snapshot.params['laporanId'];

  }
  ionViewWillEnter()
  {
    this.loadLaporan();
  }

async loadLaporan(){
  const loading = await this.loadingCtrl.create({
    message: 'loading..',
    spinner: 'crescent',
    showBackdrop: true
  });
  loading.present();

  this.laporanService.getLaporan(this.laporanId).subscribe(laporan =>{
    this.title = laporan.title;
    this.desc = laporan.desc;
    this.date = laporan.date;
    this.amount = laporan.amount;
    this.price = laporan.price;
    loading.dismiss();
  });
}
  async updateLaporan(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating data..',
      spinner: 'crescent',
      showBackdrop:true
    });
    loading.present();

    this.afs.collection('laporan').doc(this.laporanId).set({
      'title': this.title,
      'desc': this.desc,
      'date': this.date,
      'amount': this.amount,
      'price': this.price
    },{merge:true})
    .then(()=>{
      loading.dismiss();
      this.toast('Laporan diupdate','success');
      this.router.navigate(['/laporanadmin']);
    })
    .catch((error)=> {
      loading.dismiss();
      this.toast(error.message, 'danger');
    });
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

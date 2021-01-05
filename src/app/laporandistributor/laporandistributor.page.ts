import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Laporan } from '../models/laporan';
import { LaporanService } from '../services/laporan.service';

@Component({
  selector: 'app-laporandistributor',
  templateUrl: './laporandistributor.page.html',
  styleUrls: ['./laporandistributor.page.scss'],
})
export class LaporandistributorPage implements OnInit {

  laporans: Laporan[];

  constructor(
    private laporanService: LaporanService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toastr: ToastController,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.laporanService.getLaporans().subscribe(laporans => {
      this.laporans = laporans;
    });
  }
  edit(laporanId)
  {
    this.router.navigate(['/editlaporan/',laporanId]);
  }
  async delete(laporanId)
  {
    const loading = await this.loadingCtrl.create({
      message:'Deleting..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();
    this.afs.collection('laporan').doc(laporanId).delete()
    .then(()=> {
      loading.dismiss();
      this.toast('Berhasil dihapus','success');
    })
    .catch((error)=>{
      this.toast(error.message,'danger')
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
     getTotal() {
      return this.laporans.reduce((i, j) => i + j.price * j.amount, 0);
    }
}

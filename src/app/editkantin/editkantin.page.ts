import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { KantinService } from '../services/kantin.service';


@Component({
  selector: 'app-editkantin',
  templateUrl: './editkantin.page.html',
  styleUrls: ['./editkantin.page.scss'],
  providers:[KantinService]
})
export class EditKantinPage implements OnInit {

  kantinId: string;
  title: string;
  desc: string;

  constructor(
    private route: ActivatedRoute,
    private kantinService: KantinService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {

    this.kantinId = this.route.snapshot.params['kantinId'];

  }
  ionViewWillEnter()
  {
    this.loadKantin();
  }

async loadKantin(){
  const loading = await this.loadingCtrl.create({
    message: 'loading..',
    spinner: 'crescent',
    showBackdrop: true
  });
  loading.present();

  this.kantinService.getKantin(this.kantinId).subscribe(kantin =>{
    this.title = kantin.title;
    this.desc = kantin.desc;
    this.kantinId = kantin.kantinId;
    loading.dismiss();
  });
}
  async updateKantin(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating data..',
      spinner: 'crescent',
      showBackdrop:true
    });
    loading.present();

    this.afs.collection('kantin').doc(this.kantinId).set({
      'title': this.title,
      'desc': this.desc,
      'kantinId': this.kantinId,
    },{merge:true})
    .then(()=>{
      loading.dismiss();
      this.toast('Kantin diupdate','success');
      this.router.navigate(['/daftarkantin']);
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
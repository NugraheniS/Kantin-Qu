import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambahkantin',
  templateUrl: './tambahkantin.page.html',
  styleUrls: ['./tambahkantin.page.scss'],
})
export class TambahKantinPage implements OnInit {
  datas: Observable<any[]>;

  newKantin: string = '';
  kategori: string = '';
  datasRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;

  constructor(private db: AngularFirestore,
     private storage: AngularFireStorage,
      private loadingController: LoadingController,
      private router: Router,
      private toastr: ToastController) {
    this.datasRef = db.collection('datas')
    this.datas = this.datasRef.valueChanges();
  }
 ngOnInit() {
  }
  chooseFile (event) {
    this.selectedFile = event.target.files
  }

  addKantin(){
    this.datasRef.add({
      title: this.newKantin,
      desc: this.kategori
    })
    .then(async resp => {

      const imageUrl = await this.uploadFile(resp.id, this.selectedFile)

      this.datasRef.doc(resp.id).update({
        id: resp.id,
        imageUrl: imageUrl || null
      })
      .then(()=> {
        this.toast('Kantin berhasil ditambahkan','success');
        this.router.navigate(['/daftarkantin']);
      })

    }).catch(error => {
      console.log(error);
    })
  }

  async uploadFile(id, file): Promise<any> {
    if(file && file.length) {
      try {
        await this.presentLoading();
        const task = await this.storage.ref('images').child(id).put(file[0])
        this.loading.dismiss();
        return this.storage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    return this.loading.present();
  }



  remove(data){
    console.log(data);
    if(data.imageUrl) {
      this.storage.ref(`images/${data.id}`).delete()
    }
    this.datasRef.doc(data.id).delete()
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
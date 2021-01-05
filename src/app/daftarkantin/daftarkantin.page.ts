import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-daftarkantin',
  templateUrl: './daftarkantin.page.html',
  styleUrls: ['./daftarkantin.page.scss'],
})
export class DaftarKantinPage implements OnInit {
  datas: Observable<any[]>;

  newKantin: string = '';
  kategori: string = '';
  datasRef: AngularFirestoreCollection;

  selectedFile: any;
  loading: HTMLIonLoadingElement;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage, private loadingController: LoadingController,private router: Router) {
    this.datasRef = db.collection('datas')
    this.datas = this.datasRef.valueChanges();
  }
 ngOnInit() {
  }
 
  }
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Laporan } from '../models/laporan';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LaporanService {

  laporanCol: AngularFirestoreCollection<Laporan>;
  laporanDoc: AngularFirestoreDocument<Laporan>;
  laporans: Observable<Laporan[]>;
  laporan: Observable<Laporan>;
  laporan$: any;

  constructor(
    private afs: AngularFirestore
  ) { 
    this.laporanCol = this.afs.collection('laporan', ref => ref.orderBy('createdAt','desc'));

    this.laporans = this.laporanCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a =>
          {
            const data = a.payload.doc.data() as Laporan;
            data.laporanId = a.payload.doc.id;
            return data;
          }
        )
      })
    )
  }
  getLaporans()
  {
    return this.laporans;
  }
  getLaporan(laporanId)
  {
    this.laporanDoc = this.afs.doc<Laporan>(`laporan/${laporanId}`);
    return this.laporan = this.laporanDoc.valueChanges();
  }
}
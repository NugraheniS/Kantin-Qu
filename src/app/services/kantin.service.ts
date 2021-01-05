import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Kantin } from '../models/kantin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KantinService {
  kantinCol: AngularFirestoreCollection<Kantin>;
  kantinDoc: AngularFirestoreDocument<Kantin>;
  kantins: Observable<Kantin[]>;
  kantin: Observable<Kantin>;
  kantin$: any;

  constructor(
    private afs: AngularFirestore
  ) { 
    this.kantinCol = this.afs.collection('kantin', ref => ref.orderBy('createdAt','desc'));

    this.kantins = this.kantinCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a =>
          {
            const data = a.payload.doc.data() as Kantin;
            data.kantinId = a.payload.doc.id;
            return data;
          }
        )
      })
    )
  }
  getKantins()
  {
    return this.kantins;
  }
  getKantin(kantinId)
  {
    this.kantinDoc = this.afs.doc<Kantin>(`kantin/${kantinId}`);
    return this.kantin = this.kantinDoc.valueChanges();
  }
}
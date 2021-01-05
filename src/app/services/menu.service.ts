import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuCol: AngularFirestoreCollection<Menu>;
  menuDoc: AngularFirestoreDocument<Menu>;
  menus: Observable<Menu[]>;
  menu: Observable<Menu>;
  menu$: any;

  constructor(
    private afs: AngularFirestore
  ) { 
    this.menuCol = this.afs.collection('menu', ref => ref.orderBy('createdAt','desc'));

    this.menus = this.menuCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a =>
          {
            const data = a.payload.doc.data() as Menu;
            data.menuId = a.payload.doc.id;
            return data;
          }
        )
      })
    )
  }
  getMenus()
  {
    return this.menus;
  }
  getMenu(menuId)
  {
    this.menuDoc = this.afs.doc<Menu>(`menu/${menuId}`);
    return this.menu = this.menuDoc.valueChanges();
  }
}
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-kantinbunurul',
  templateUrl: './kantinbunurul.page.html',
  styleUrls: ['./kantinbunurul.page.scss'],
  providers:[MenuService]
})
export class KantinbunurulPage implements OnInit {

  menus: Menu[];

  constructor(
    private menuService: MenuService,
    private loadingCtrl: LoadingController,
    private router: Router,
    private toastr: ToastController,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.menuService.getMenus().subscribe(menus => {
      this.menus = menus;
    });
  }
  edit(menuId)
  {
    this.router.navigate(['/editmenu/',menuId]);
  }
  async delete(menuId)
  {
    const loading = await this.loadingCtrl.create({
      message:'Deleting..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();
    this.afs.collection('menu').doc(menuId).delete()
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

}
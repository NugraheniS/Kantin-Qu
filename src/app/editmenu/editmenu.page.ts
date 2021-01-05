import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { MenuService} from '../services/menu.service';


@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.page.html',
  styleUrls: ['./editmenu.page.scss'],
  providers:[MenuService]
})
export class EditmenuPage implements OnInit {

  menuId: string;
  title: string;
  status: string;
  price: number;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController
  ) { }

  ngOnInit() {

    this.menuId = this.route.snapshot.params['menuId'];

  }
  ionViewWillEnter()
  {
    this.loadMenu();
  }

async loadMenu(){
  const loading = await this.loadingCtrl.create({
    message: 'loading..',
    spinner: 'crescent',
    showBackdrop: true
  });
  loading.present();

  this.menuService.getMenu(this.menuId).subscribe(menu =>{
    this.title = menu.title;
    this.status = menu.status;
    this.price = menu.price;
    loading.dismiss();
  });
}
  async updateMenu(){
    const loading = await this.loadingCtrl.create({
      message: 'Updating data..',
      spinner: 'crescent',
      showBackdrop:true
    });
    loading.present();

    this.afs.collection('menu').doc(this.menuId).set({
      'title': this.title,
      'status': this.status,
      'price': this.price
    },{merge:true})
    .then(()=>{
      loading.dismiss();
      this.toast('menu diupdate','success');
      this.router.navigate(['/menumakanan']);
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

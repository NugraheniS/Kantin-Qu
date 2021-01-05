import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthsGuard } from './guards/auths.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lupakatasandi',
    loadChildren: () => import('./lupakatasandi/lupakatasandi.module').then( m => m.LupakatasandiPageModule)
  },
  {
    path: 'pilihanlogin',
    loadChildren: () => import('./pilihanlogin/pilihanlogin.module').then( m => m.PilihanloginPageModule)
  },
  {
    path: 'lupakatasandi2',
    loadChildren: () => import('./lupakatasandi2/lupakatasandi2.module').then( m => m.Lupakatasandi2PageModule)
  },
  {
    path: 'lupakatasandi3',
    loadChildren: () => import('./lupakatasandi3/lupakatasandi3.module').then( m => m.Lupakatasandi3PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'registerdistributor',
    loadChildren: () => import('./registerdistributor/registerdistributor.module').then( m => m.RegisterdistributorPageModule)
  },
  {
    path: 'pesananmakanan',
    loadChildren: () => import('./pesananmakanan/pesananmakanan.module').then( m => m.PesananmakananPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'logindistributor',
    loadChildren: () => import('./logindistributor/logindistributor.module').then( m => m.LogindistributorPageModule)
  },
  {
    path: 'pesanandistributor',
    loadChildren: () => import('./pesanandistributor/pesanandistributor.module').then( m => m.PesanandistributorPageModule),
    canActivate: [AuthsGuard]
  },
  {
    path: 'daftarkantin',
    loadChildren: () => import('./daftarkantin/daftarkantin.module').then( m => m.DaftarkantinPageModule)
  },
  {
    path: 'kantinbunurul',
    loadChildren: () => import('./kantinbunurul/kantinbunurul.module').then( m => m.KantinbunurulPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'pengaturanedit',
    loadChildren: () => import('./pengaturanedit/pengaturanedit.module').then( m => m.PengaturaneditPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bookingdistributor',
    loadChildren: () => import('./bookingdistributor/bookingdistributor.module').then( m => m.BookingdistributorPageModule)
  },
  {
    path: 'laporandistributor',
    loadChildren: () => import('./laporandistributor/laporandistributor.module').then( m => m.LaporandistributorPageModule)
  },
  {
    path: 'laporanadmin',
    loadChildren: () => import('./laporanadmin/laporanadmin.module').then( m => m.LaporanadminPageModule)
  },
  {
    path: 'transaksiadmin',
    loadChildren: () => import('./transaksiadmin/transaksiadmin.module').then( m => m.TransaksiadminPageModule)
  },
  {
    path: 'profiladmin',
    loadChildren: () => import('./profiladmin/profiladmin.module').then( m => m.ProfiladminPageModule)
  },
  {
    path: 'makananbunurul',
    loadChildren: () => import('./makananbunurul/makananbunurul.module').then( m => m.MakananbunurulPageModule)
  },
  {
    path: 'detailpesanan',
    loadChildren: () => import('./detailpesanan/detailpesanan.module').then( m => m.DetailpesananPageModule)
  },
  {
    path: 'detailbooking',
    loadChildren: () => import('./detailbooking/detailbooking.module').then( m => m.DetailbookingPageModule)
  },
  {
    path: 'buktipembayaran',
    loadChildren: () => import('./buktipembayaran/buktipembayaran.module').then( m => m.BuktipembayaranPageModule)
  },
  {
    path: 'pesananjajanan',
    loadChildren: () => import('./pesananjajanan/pesananjajanan.module').then( m => m.PesananjajananPageModule)
  },
  {
    path: 'pesananminuman',
    loadChildren: () => import('./pesananminuman/pesananminuman.module').then( m => m.PesananminumanPageModule)
  },
  {
    path: 'profildistributor',
    loadChildren: () => import('./profildistributor/profildistributor.module').then( m => m.ProfildistributorPageModule)
  },
  {
    path: 'bookingmakanan',
    loadChildren: () => import('./bookingmakanan/bookingmakanan.module').then( m => m.BookingmakananPageModule)
  },
  {
    path: 'bookingjajanan',
    loadChildren: () => import('./bookingjajanan/bookingjajanan.module').then( m => m.BookingjajananPageModule)
  },
  {
    path: 'bookingminuman',
    loadChildren: () => import('./bookingminuman/bookingminuman.module').then( m => m.BookingminumanPageModule)
  },
  {
    path: 'laporanadmin2',
    loadChildren: () => import('./laporanadmin2/laporanadmin2.module').then( m => m.Laporanadmin2PageModule)
  },
  {
    path: 'menukantinbunurul',
    loadChildren: () => import('./menukantinbunurul/menukantinbunurul.module').then( m => m.MenukantinbunurulPageModule)
  },
  {
    path: 'tambahkantin',
    loadChildren: () => import('./tambahkantin/tambahkantin.module').then( m => m.TambahkantinPageModule)
  },
  {
    path: 'tambahlaporan',
    loadChildren: () => import('./tambahlaporan/tambahlaporan.module').then( m => m.TambahlaporanPageModule)
  },
  {
    path: 'tambahmenu',
    loadChildren: () => import('./tambahmenu/tambahmenu.module').then( m => m.TambahmenuPageModule)
  },
  {
    path: 'editlaporan/:laporanId',
    loadChildren: () => import('./editlaporan/editlaporan.module').then( m => m.EditlaporanPageModule)
  },
  {
    path: 'menumakanan',
    loadChildren: () => import('./menumakanan/menumakanan.module').then( m => m.MenumakananPageModule)
  },
  {
    path: 'editmenu/:menuId',
    loadChildren: () => import('./editmenu/editmenu.module').then( m => m.EditmenuPageModule)
  },
  {
    path: 'pengaturan2',
    loadChildren: () => import('./pengaturan2/pengaturan2.module').then( m => m.Pengaturan2PageModule),
    canActivate: [AuthsGuard]
  },
  {
    path: 'pengaturanedit2',
    loadChildren: () => import('./pengaturanedit2/pengaturanedit2.module').then( m => m.Pengaturanedit2PageModule),
    canActivate: [AuthsGuard]
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'editkantin/:kantinId',
    loadChildren: () => import('./editkantin/editkantin.module').then( m => m.EditkantinPageModule)
  },
  {
    path: 'tambahmakanan',
    loadChildren: () => import('./tambahmakanan/tambahmakanan.module').then( m => m.TambahmakananPageModule)
  },
  {
    path: 'detailmenu',
    loadChildren: () => import('./detailmenu/detailmenu.module').then( m => m.DetailmenuPageModule)
  },
  {
    path: 'detailmenubooking',
    loadChildren: () => import('./detailmenubooking/detailmenubooking.module').then( m => m.DetailmenubookingPageModule)
  },
  {
    path: 'buktipembayaranbooking',
    loadChildren: () => import('./buktipembayaranbooking/buktipembayaranbooking.module').then( m => m.BuktipembayaranbookingPageModule)
  },
  {
    path: 'transaksibooking',
    loadChildren: () => import('./transaksibooking/transaksibooking.module').then( m => m.TransaksibookingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

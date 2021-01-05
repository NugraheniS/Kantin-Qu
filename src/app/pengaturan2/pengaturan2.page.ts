import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthsService } from '../services/auths.service';

@Component({
  selector: 'app-pengaturan2',
  templateUrl: './pengaturan2.page.html',
  styleUrls: ['./pengaturan2.page.scss'],
})
export class Pengaturan2Page implements OnInit {

  users:any;

  constructor(
    private auth: AuthsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(users => {
      this.users = users;
    })
  }
  editProfile(){
    this.router.navigate(['/pengaturanedit2']);
  }

}

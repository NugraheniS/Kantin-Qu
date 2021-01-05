import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profiladmin',
  templateUrl: './profiladmin.page.html',
  styleUrls: ['./profiladmin.page.scss'],
})
export class ProfiladminPage implements OnInit {

  user:any;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }
}
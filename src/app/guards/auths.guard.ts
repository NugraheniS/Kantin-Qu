import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthsService } from '../services/auths.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class AuthsGuard implements CanActivate {
 
  constructor(
    private auth: AuthsService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    return this.auth.user$.pipe(
      take(1),
      map(users => users ? true : false),
      tap(isLoggedIn => {
        if(!isLoggedIn)
      {
        this.router.navigate(['/logindistributor']);
        return false;
      }
      return true;
      })
    )
    }
  
}
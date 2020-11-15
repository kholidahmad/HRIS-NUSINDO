import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    //private router: any;

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (!this.authService.isAuthenticated()) {
          //this.router.navigate(['apps/pages/login']);
          return true;
      } else {
          return this.authService.isAuthenticated();
          //return true;
      }

  }
}

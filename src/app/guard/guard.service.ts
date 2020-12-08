import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class GuardService implements CanActivate, CanDeactivate<any>, Resolve<any>   {
  login = false;

  constructor() { }
  // to open the profile page
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    console.log('we are in canActivate method!');

    if (!this.userService.isLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
  // when fill the form
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree>{
    return undefined;
  }
  // when fill the form and submit it
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return undefined;
  }
}

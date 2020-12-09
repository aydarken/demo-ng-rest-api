import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanLoad, Route,
  Router,
  RouterStateSnapshot, UrlSegment, UrlTree,
} from '@angular/router';
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import {HeaderDataService} from "../services/header-data.service";

@Injectable()
export class GuardService implements CanLoad {

  constructor() {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = route.path;
    console.log('Url:' + url);
    if (url == 'admin') {
      alert('You are visiting admin pages');
      return true;
    }
    alert('Not admin');
    return true;
  }

}

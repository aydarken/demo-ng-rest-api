import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Router} from "@angular/router";

@Injectable()
export class HeaderDataService {
  private currentPage = ' ';

  constructor(private router: Router) {
  }

  getCurrentUrl() {
    // const currentUrl = window.location.href;
    // console.log('current url ' + currentUrl);
    this.currentPage = this.router.url;
    console.log('current url ' + this.currentPage);
  }

  getCurrentPage(): string {
    console.log('hi' + this.currentPage);
    return this.currentPage = this.router.url;
  }

}

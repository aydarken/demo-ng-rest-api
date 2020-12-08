import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class HeaderDataService {
  private currentPage = 'Home';

  constructor(
    private loggingService: LoggingService) {
  }

  getCurrentUrl() {
    const currentUrl = window.location.href;
    console.log('current url ' + currentUrl);
  }

  setCurrentPage(currentPage: string) {
    this.currentPage = currentPage;
  }

  getCurrentPage(): string {
    return this.currentPage;
  }

}

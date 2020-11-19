import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class UserService {

  constructor(
    private loggingService: LoggingService) {
  }

  isLoggedIn(): boolean {
    return true;
  }
}

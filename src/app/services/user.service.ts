import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {User} from '../home/user';

@Injectable()
export class UserService {
  private userList: User[] = new Array();

  constructor(
    private loggingService: LoggingService) {
  }

  getUserList(): User[] {
    this.loggingService.log('List of users:' + this.userList);

    return this.userList;
  }

  setUserList(value: User) {
    this.userList.push(value);
  }

  isLoggedIn(): boolean {
    return true;
  }
}

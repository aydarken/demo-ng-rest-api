import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {User} from '../home/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private apiUsersUrl = 'http://localhost:3000/users';
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient) {
  }

  getUsers() {
    this.loggingService.log('List of users:' + this.http.get<User[]>(this.apiUsersUrl));

    return this.http.get<User[]>(this.apiUsersUrl);
  }

  postUser(value: User): Observable<any> {
    const API_URL = `${this.apiUsersUrl}`;

    return this.http.post(API_URL, value, {headers: this.headers});
  }

  isLoggedIn(): boolean {
    return true;
  }
}

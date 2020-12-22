import {Injectable} from '@angular/core';
import {Customer} from "../profile/customer";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoggingService} from "./logging.service";

@Injectable()
export class CustomerService {
  private apiCustomerUrl = 'http://localhost:3000/customers';
  private headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');


  constructor(private http: HttpClient,
              private loggingService: LoggingService) {
  }

  getCustomers() {
    this.loggingService.log('List of customers:' + this.http.get<Customer[]>(this.apiCustomerUrl));

    return this.http.get<Customer[]>(this.apiCustomerUrl);
  }

  postCustomer(value: Customer): Observable<any> {
    const API_URL = `${this.apiCustomerUrl}`;

    return this.http.post(API_URL, value, {headers: this.headers});
  }

  isLoggedIn(): boolean {
    return true;
  }

}

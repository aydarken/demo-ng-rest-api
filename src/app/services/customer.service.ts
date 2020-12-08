import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Customer} from "../profile/customer";

@Injectable()
export class CustomerService {
  private customerList: Customer[] = new Array();


  constructor() {
  }

  getCustomerList(): Customer[] {
    return this.customerList;
  }

  setCustomerList(value: Customer) {
    this.customerList.push(value);
  }


}

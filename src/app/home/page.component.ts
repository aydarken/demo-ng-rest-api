import {Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "./user";
import {UserService} from "../services/user.service";
import {HeaderDataService} from "../services/header-data.service";
import {CustomerService} from "../services/customer.service";
import {Customer} from "../profile/customer";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  userList: User = new User();
  constructor(private userService: UserService,
              private headerData: HeaderDataService,
              private customerService: CustomerService) {
  }
  customerOrganization: Customer[] = this.customerService.getCustomerList();

  ngOnInit(): void {
    this.headerData.getCurrentUrl();
  }

  onSubmit(userForm: NgForm) {
    console.log('user list ' + this.userList.firstName);
    console.log('user company ' + this.userList.organization);
    this.userService.setUserList(this.userList);
  }
}

import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
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

  customers: Customer[];

  ngOnInit(): void {
    this.headerData.getCurrentUrl();
    this.customerService.getCustomers()
      .subscribe(
        data => this.customers = data
      );
  }

  onSubmit(userForm: NgForm) {
    console.log('user list ' + this.userList);
    this.userService.postUser(this.userList)
      .subscribe(
        data => {
          console.log(data);
          alert('User added successfully ' + data.id);
        }
      );
  }
}

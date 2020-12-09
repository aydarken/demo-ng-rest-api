import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from "../services/user.service";
import {HeaderDataService} from "../services/header-data.service";
import {User} from "../home/user";
import {CustomerService} from "../services/customer.service";
import {Customer} from "./customer";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePhoto = '/assets/image/profile-image.png';
  fullName = 'username';
  companyName = 'Name of organization';
  customerList: Customer = new Customer();

  constructor(private userService: UserService,
              private headerDataService: HeaderDataService,
              private customerService: CustomerService) {
  }

  userList: User[] = this.userService.getUserList();
  databaseList: Customer[] = this.customerService.getCustomerList();


  addDatabase() {
    console.log('added database ' + this.customerList.databaseName);
    this.customerService.setCustomerList(this.customerList);
  }

  ngOnInit(): void {
    this.userList = this.userService.getUserList();
    this.headerDataService.getCurrentUrl();
  }

}

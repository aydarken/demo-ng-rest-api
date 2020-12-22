import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {HeaderDataService} from "../services/header-data.service";
import {User} from "../home/user";
import {CustomerService} from "../services/customer.service";
import {Customer} from "./customer";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePhoto = '/assets/image/profile-image.png';
  fullName = 'username';
  companyname = 'Name of organization';
  customerList: Customer = new Customer();

  constructor(private userService: UserService,
              private headerDataService: HeaderDataService,
              private customerService: CustomerService) {
  }

  userList: User[];
  databaseList: Customer[];


  addDatabase() {
    console.log('added database ' + this.customerList.databaseName);
    console.log('added database ' + this.customerList);

    this.customerService.postCustomer(this.customerList)
      .subscribe(
        data => {
          console.log(data);
          alert('User added successfully ' + data.id);
        }
      );
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(data => this.databaseList = data);
    this.headerDataService.getCurrentUrl();
    this.userService.getUsers()
      .subscribe(data => this.userList = data);
  }

}

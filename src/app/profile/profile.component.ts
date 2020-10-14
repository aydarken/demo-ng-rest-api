import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profilePhoto = '/assets/image/profile-image.png';
  fullName = 'username';
  companyName = 'Name of organization';

  databases = ['first data base', 'second data base'];
  database: string;

  constructor() {
  }
  @Output() newItemEvent = new EventEmitter<string[]>();

  addDatabase(){
    this.databases.push(this.database);
  }

  ngOnInit(): void {
    this.newItemEvent.emit(this.databases);
  }

}

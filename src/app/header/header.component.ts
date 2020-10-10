import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toDate: Date = new Date();
  isClicked: boolean = false;

  showDate() {
    this.isClicked = !this.isClicked;
  }

  constructor() {
    this.log(`Header: constructor`);
  }

  ngOnInit() {
    this.log(`Header: onInit`);
  }

  ngOnDestroy() {
    this.log(`Header:onDestroy`);
  }

  private log(msg: string) {
    console.log(msg);
  }
}

import {Component, OnInit} from '@angular/core';
import {HeaderDataService} from "../../services/header-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page: string;

  constructor(private headerData: HeaderDataService) {
  }

  ngOnInit(): void {
    // this.page = this.headerData.getCurrentPage();

  }

}

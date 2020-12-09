import { Component, OnInit } from '@angular/core';
import {HeaderDataService} from "../services/header-data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  companyPhoto = './assets/image/our_company.jpg';
  goalPhoto = './assets/image/company_goals.jpg';

  constructor(private headerData: HeaderDataService) { }

  ngOnInit(): void {
    this.headerData.getCurrentUrl();
  }

}

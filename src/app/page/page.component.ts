import {
  Component,
  OnInit
} from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() {
  }

  centimeters:number;
  inches:number;

  isChecked: boolean = true;

  toggle() {
    this.isChecked = !this.isChecked;
  }

  name: string;

  ngOnInit(): void {
  }

}

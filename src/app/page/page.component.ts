import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('PageComponent:Constructor');
  }

  @Input() name: string;
  count = 1;

  ngOnInit() {

    this.log('PageComponent:ngOnInit');
  }
  ngOnChanges() {

    this.log('PageComponent:OnChanges');
  }
  ngDoCheck() {

    this.log('PageComponent:ngDoCheck');
  }
  ngAfterViewInit() {

    this.log('PageComponent:ngAfterViewInit');
  }
  ngAfterViewChecked() {

    this.log('PageComponent:ngAfterViewChecked');
  }
  ngAfterContentInit() {

    this.log('PageComponent:ngAfterContentInit');
  }
  ngAfterContentChecked() {

    this.log('PageComponent:ngAfterContentChecked');
  }

  ngOnDestroy() {
    alert('PageComponent:Hide OnDestroy');

  }

  private log(msg: string) {
    console.log(this.count + '. ' + msg);
    this.count++;
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title = 'AdvancedWebDevelopmentProject';

  displayInput = false;

  toggle() {
    this.displayInput = !this.displayInput;
  }

  constructor() {
    console.log('AppComponent:Constructor');
  }

  ngOnChanges() {
    console.log('AppComponent:Show\nOnChanges');
  }

  ngOnInit() {
    console.log('AppComponent: OnInit');
  }

  ngDoCheck() {
    console.log('AppComponent:DoCheck');
  }

  ngAfterContentInit() {
    console.log('AppComponent:AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AppComponent:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AppComponent: AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AppComponent Hide OnDestroy');
    alert('AppComponent: Hide OnDestroy');
  }
}

import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';

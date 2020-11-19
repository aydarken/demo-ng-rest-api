import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  sharedValue: number;

  constructor() {
    this.sharedValue = Math.random();
  }

  getSharedValue() {
    return this.sharedValue;
  }
}

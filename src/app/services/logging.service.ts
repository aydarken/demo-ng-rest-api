import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { }
  log(message: string) {
    console.log('Logging.service log message: ',
      message);
  }

}

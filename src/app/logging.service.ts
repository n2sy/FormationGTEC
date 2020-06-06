import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logTo(acc) {
    console.log(`The new status of ${acc.name} is ${acc.status}`);
  }
}

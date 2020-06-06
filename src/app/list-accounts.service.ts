import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ListAccountsService {
  listAccountsFromService = [
    {
      name : 'Hela Account',
      status : 'active'
    },
    {
      name : 'Adel Account',
      status : 'inactive'
    },
    {
      name : 'Khalil Account',
      status : 'hidden'
    }
  ];

  constructor(private logService : LoggingService) { }

  addAccount(newAcc) {
    this.listAccountsFromService.push(newAcc);
  }

  changeStatus(id, newStatus) {
    this.listAccountsFromService[id].status = newStatus;
    this.logService.logTo(this.listAccountsFromService[id]);
  }
}

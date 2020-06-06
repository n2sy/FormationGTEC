import { Component, OnInit, Input } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() oneAccount;
  @Input() id;
  constructor(private listSer : ListAccountsService ) { }

  ngOnInit() {
  }

  setTo(newStatus) {
    this.listSer.changeStatus(this.id, newStatus);
    // this.oneAccount.status = newStatus;
    
  }

}

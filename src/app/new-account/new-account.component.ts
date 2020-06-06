import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  @Output() sendAccToHome = new EventEmitter();
  constructor(private listService : ListAccountsService) { }

  ngOnInit() {
  }

  // SendNewAccount(n, s) {
  //   this.sendAccToHome.emit({name : n, status : s});
  // }

  addAccount(n, s) {
    this.listService.addAccount({name : n, status : s})
  }

}

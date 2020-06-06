import { Component, OnInit } from '@angular/core';
import { ListAccountsService } from '../list-accounts.service';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css']
})
export class HomeAccountComponent implements OnInit {
  listeAccount = [];

  constructor(private listService : ListAccountsService) { }

  ngOnInit() {
    this.listeAccount = this.listService.listAccountsFromService;
  }


}

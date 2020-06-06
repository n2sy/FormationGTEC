import { Component, OnInit } from '@angular/core';
import { ListRecruesService } from '../list-recrues.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recrue',
  templateUrl: './recrue.component.html',
  styleUrls: ['./recrue.component.css'],
  
})
export class RecrueComponent implements OnInit {
  listeRecr : Personne[];
  constructor(private recrueService : ListRecruesService) { }

  ngOnInit() {
    this.listeRecr = this.recrueService.listRecrues;
  }

}

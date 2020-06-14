import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { ListePersonneService } from '../liste-personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchListPerson : Personne[] = [];
  constructor(private perService : ListePersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  SearchPerson(i) {
    this.perService.getPersonneByNameAPI(i).subscribe(
      (reponse) => {
        this.SearchListPerson = reponse;
        //console.log(this.SearchListPerson);
      }
    )    
  }

  selectPerson(p) {
    this.SearchListPerson = [];
    this.router.navigate(['cv', p['id']]);

  }

}

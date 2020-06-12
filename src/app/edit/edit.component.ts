import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { ListePersonneService } from '../liste-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pers : Personne;
  constructor(private activatedroute : ActivatedRoute,
    private router : Router,
    private persService : ListePersonneService) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(
      (p : Params) => {
        this.pers = this.persService.getPersonneById(p['id'])
        console.log(this.pers);
      }
    )
  }

  updatePerson() {
    this.persService.updatePerson(this.pers);
    this.router.navigate(['cv'])
  }

}

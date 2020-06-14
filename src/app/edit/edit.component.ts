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
      (reponse : Params) => {
          this.persService.getPersonneByIdAPI(reponse['id']).subscribe(
          (rep : Personne) => {
            this.pers = rep;
          },
          (error) => {
            console.log('Error with getPersonneByIdAPI');   
          }
        )
      },
      (error) => {
        console.log('Erreur avec InfosComponent - Route Params');  
      }
    );
  }

  updatePerson() {
    //this.persService.updatePerson(this.pers);
    this.persService.updatePersonAPI(this.pers).subscribe(
      (reponse) => {
        this.router.navigate(['cv'])
      },
      (error) => {
        console.log('Error with updatePersonAPI : '+ error);
        
      }
    );
  }

}

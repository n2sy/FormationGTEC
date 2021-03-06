import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListePersonneService } from '../liste-personne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private listeService : ListePersonneService) { }

  ngOnInit() {
    // var id = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.listeService.getPersonneById(id);

    this.activatedRoute.params.subscribe(
      (reponse : Params) => {
          this.listeService.getPersonneByIdAPI(reponse['id']).subscribe(
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

  GoToEdit() {
    this.router.navigate(['cv/edit', this.pers['id']]);
  }

  deletePerson() {
    if(confirm('Vous êtes sûr de vouloir supprimer cette personne ?'))
      { 
        //this.listeService.deletePerson(this.pers);
        this.listeService.deletePersonAPI(this.pers['id']).subscribe(
          (reponse) => {
            this.router.navigate(['cv']);
          },
          (error) => {
            console.log('Error with DeleteAPI');
          }
        )
        
      }
  }

  

}

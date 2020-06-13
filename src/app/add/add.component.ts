import { Component, OnInit } from '@angular/core';
import { ListePersonneService } from '../liste-personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private PersService : ListePersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  AddPerson(p) {
    //this.PersService.addPerson(p);
    
    this.PersService.addPersonAPI(p).subscribe(
      (reponse) => {
        this.router.navigate(['cv']);
      },
      (error) => {
        alert("Vous n'avez pas les permissions nécessaires !")
        console.log('Error with addPersonAPI');
      }
    );

  }

}

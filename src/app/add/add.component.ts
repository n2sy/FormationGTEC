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
    this.PersService.addPerson(p);
    this.router.navigate(['cv']);
    console.log(this.PersService.listePersonneS);
    

  }

}

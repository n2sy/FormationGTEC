import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { ListePersonneService } from '../liste-personne.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPers : Personne;
  listePersonne : Personne[] = [];
  
  constructor(private personneService : ListePersonneService) { }

  ngOnInit() {
    this.listePersonne = this.personneService.getListePersonnes();
  }

  RecupPersFromListe(x) {
    this.selectedPers = x;
  }

  addPerson() {
    this.personneService.listePersonneS.push(
      new Personne(10, "Khalil", "simpson", 54, "ingénieur")
    )
  console.log(this.personneService.listePersonneS)
  }

}

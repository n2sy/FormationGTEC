import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPers : Personne;
  listePersonne : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "ingénieur", "bart.jpg"),
    new Personne(3, "marge", "simpson", 54, "secrétaire", "marge.jpg")

  ]
  constructor() { }

  ngOnInit() {
  }

  RecupPersFromListe(x) {
    this.selectedPers = x;
  }

}

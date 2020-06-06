import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListePersonneService {
  listePersonneS : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "ingénieur", "bart.jpg"),
    new Personne(3, "marge", "simpson", 54, "secrétaire")

  ]
  constructor() { }

  getListePersonnes() {
    return this.listePersonneS;
  }

  getPersonneById(id) {
    return this.listePersonneS.find((p) => p.id == id)
  }
}

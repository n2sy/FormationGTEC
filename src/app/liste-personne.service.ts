import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListePersonneService {
  link = "http://localhost:3000/api/personnes"
  listePersonneS : Personne[] = [
  //   new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
  //   new Personne(2, "bart", "simpson", 15, "ingénieur", "bart.jpg"),
  //   new Personne(3, "marge", "simpson", 54, "secrétaire")
  ]
  constructor(private http : HttpClient) { }

  getListePersonnesAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link)
  }

  getListePersonnes() {
    return this.listePersonneS;
  }

  getPersonneById(id) {
    return this.listePersonneS.find((p) => p.id == id)
  }

  addPerson(p) {
    p['id'] = this.listePersonneS[this.listePersonneS.length - 1].id + 1;
    this.listePersonneS.push(p);
  }

  updatePerson(p) {
    let i = this.listePersonneS.indexOf(p);
    this.listePersonneS[i] = p;
  }

  deletePerson(p) {
    let i = this.listePersonneS.indexOf(p);
    this.listePersonneS.splice(i, 1);
  }
}

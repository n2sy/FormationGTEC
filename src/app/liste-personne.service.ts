import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ListePersonneService {
  link = "http://localhost:3000/api/personnes"
  listePersonneS : Personne[] = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg", "candidat"),
    new Personne(2, "bart", "simpson", 15, "ingénieur", "bart.jpg", "recrue"),
    new Personne(3, "marge", "simpson", 54, "secrétaire", "marge.jpg", "refuse"),
    new Personne(4, "Hela", "hajjem", 35, "enseignant", "homer.jpg", "candidat"),
    new Personne(5, "imed", "marsaoui", 15, "ingénieur", "bart.jpg", "refuse"),
    new Personne(6, "adel", "cherif", 54, "secrétaire", "", "recrue")
  ]
  constructor(private http : HttpClient) { }

  filterList(property) {
    return this.listePersonneS.filter((p) => p.status == property)
  }


  getListePersonnesAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link)
  }

  getListePersonnes() {
    return this.listePersonneS;
  }

  getPersonneById(id) {
    return this.listePersonneS.find((p) => p.id == id)
  }

  getPersonneByIdAPI(id) : Observable<Personne> {
    return this.http.get<Personne>(`${this.link}/${id}`);

  }

  getPersonneByNameAPI(s) : Observable<Personne[]> {
    let filterValue = `{"where":{"nom":{"like":"%${s}%"}}}`
    const p = new HttpParams().set('filter', filterValue);
    return this.http.get<Personne[]>(this.link, {params : p});
  }

  addPerson(p) {
    p['id'] = this.listePersonneS[this.listePersonneS.length - 1].id + 1;
    this.listePersonneS.push(p);
  }

  addPersonAPI(p) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // if(myToken) {
    //   const par = new HttpParams().set('access_token', myToken);
    //   return this.http.post(this.link, p, {params : par});
    // }
    return this.http.post(this.link, p);

  }

  updatePerson(p) {
    let i = this.listePersonneS.indexOf(p);
    this.listePersonneS[i] = p;
  }

  updatePersonAPI(p) : Observable<any>  {
    return this.http.put(this.link, p);

  }

  deletePerson(p) {
    let i = this.listePersonneS.indexOf(p);
    this.listePersonneS.splice(i, 1);
  }

  deletePersonAPI(id) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // console.log(myToken);
    // if(myToken) {
    //   const par = new HttpParams().set('access_token', myToken);
    //    return this.http.delete(`${this.link}/${id}`, {params : par});
    // }
    return this.http.delete(`${this.link}/${id}`);

  }
}

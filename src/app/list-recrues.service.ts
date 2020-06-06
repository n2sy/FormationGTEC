import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListRecruesService {
  listRecrues : Personne[] = [];

  constructor() { }

  addRecrue(p : Personne) {
    if(this.listRecrues.indexOf(p) < 0) {
      this.listRecrues.push(p)
    }
    else {
      alert('Cette personne a déjà été recruté !');
    }
  }
}

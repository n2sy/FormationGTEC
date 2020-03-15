import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePers : Personne[];
  @Output() selectedPers = new EventEmitter<Personne>()

  constructor() { }

  ngOnInit() {
  }

  sendPers(p : Personne) {
    this.selectedPers.emit(p);
  }

}

import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';
import { ListePersonneService } from '../liste-personne.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
  providers : [ListePersonneService]
})
export class ListeComponent implements OnInit {
  @Input() listePers : Personne[];
  @Output() selectedPers = new EventEmitter<Personne>()

  constructor(private persService : ListePersonneService) { }

  ngOnInit() {
    this.listePers = this.persService.getListePersonnes();
  }

  sendPers(p : Personne) {
    this.selectedPers.emit(p);
  }

  showList() {
    console.log(this.persService.listePersonneS);
    
  }


}

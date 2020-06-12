import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';
import { ListePersonneService } from '../liste-personne.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Input() listePers : Personne[];
  @Output() selectedPers = new EventEmitter<Personne>()

  constructor(private persService : ListePersonneService) { }

  ngOnInit() {
    this.persService.getListePersonnesAPI().subscribe(
        (reponse : Personne[]) => {
          this.listePers = reponse;
        },
        (error) => {
          console.log('Error with getListePersonnesAPI()');
          
        }
    )
  }

  sendPers(p : Personne) {
    this.selectedPers.emit(p);
  }

  showList() {
    console.log(this.persService.listePersonneS);
    
  }


}

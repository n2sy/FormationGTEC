import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Personne } from '../model/personne';
import { ListePersonneService } from '../liste-personne.service';

@Component({
  selector: 'app-rh-manager',
  templateUrl: './rh-manager.component.html',
  styleUrls: ['./rh-manager.component.css']
})
export class RhManagerComponent implements OnInit {
  ListCandidats : Personne[] = [];
  ListRecrues : Personne[] = [];
  ListRefuses : Personne[] = [];
  showValue : boolean = false;
  displayValue : string = "none";

  constructor(private persService : ListePersonneService) { }

  ngOnInit() {
    this.ListCandidats = this.persService.filterList("candidat");
    this.ListRecrues = this.persService.filterList("recrue");
    this.ListRefuses = this.persService.filterList("refuse");
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    

    let p = event.item.data;
    p['status'] = event.container.element.nativeElement.classList[0];
    this.persService.updatePerson(p);
  }

  showModal() {
    this.displayValue = 'block';
    this.showValue = true;
  }

  hideModal() {
    this.displayValue = 'none';
    this.showValue = false;
  }

  AddPersonFromModal(n, p) {
    this.persService.addPerson({
      nom : n,
      prenom : p,
      age : 40,
      profession : '',
      avatar : '',
      status : 'refuse'
    });
    this.ngOnInit();
    this.hideModal();

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  couleur : string = "red";
  hd : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  Traitement() {
    //alert('Evenement traité')
    this.hd = !this.hd
  }

  TraitementDuPere(msg) {
    alert(msg);
  }

  changeCouleur(cl) {
    console.log(cl.value);
    this.couleur = cl.value;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { ListRecruesService } from '../list-recrues.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() PersSelected : Personne;
  constructor(private recrueService : ListRecruesService,
    private router : Router) { }

  ngOnInit() {
  }

  RecruterPersonne() {
    this.recrueService.addRecrue(this.PersSelected);    
  }

  PlusDeDetails() {
    this.router.navigate(['cv', this.PersSelected.id]);
  }

}

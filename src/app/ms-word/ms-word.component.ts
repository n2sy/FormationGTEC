import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  bgcolor : string;
  color : string;
  size : string;
  font : string;
  listeFonts = ['', 'Garamond', 'Impact', 'Verdana']

  constructor() { }

  ngOnInit() {
  }
  changerSize(s) {
    this.size = s+'px';
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() couleurFils : string;
  @Output() msgToParent = new EventEmitter();
  nbre : number = 20;
  constructor() { }

  ngOnInit() {
  }

  send() {
    this.msgToParent.emit('Message envoyé par le fils '+this.nbre);
  }

}

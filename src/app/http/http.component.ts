import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/userlls";
  constructor(private httpclient : HttpClient) { }

  ngOnInit() {
    this.GetUsers().subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (error) => {
        console.log('Error with our API');
        console.log(error);
      },
      () => {
        console.log('That is all !!!');
        
      }
    )
  }

  GetUsers() : Observable<any>{
    return this.httpclient.get(this.link);
  }



}

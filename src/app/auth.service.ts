import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  link = "http://localhost:3000/api/Users"
  constructor(private http : HttpClient) { }

  login(identifiants) : Observable<any> {
    console.log(identifiants);
    return this.http.post(this.link+'/login', identifiants);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged() {
    if(localStorage.getItem('token'))
      return true;
    else
      return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection = "gl";
  option = "";
  erreur : boolean = false;
  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit() {
  }

  seConnecter(f) {
    this.auth.login(f.value).subscribe(
      (reponse) => {
        localStorage.setItem('token', reponse['id']);
        this.router.navigate(['cv']);
      },
      (error) => {
        this.erreur = true;
        f.reset();
      }
    )
    //console.log(f)
    //this.router.navigate(['cv']);
    
  }

  resetForm(f)
  {
    f.reset();
  }

  randomPwd(f) {
    f.setValue({
      "credentials": {
        "nom": "",
        "motdepasse": "khalilpassword"
      },
      "section": "",
      "option": ""
    })
  }

  randomPwdv2(f) {
    f.form.patchValue({
      "section": "dsen"
    })
  }

  randomv3(f) {
    f.controls.credentials.value.motdepasse = "hanenePwd"
  }

}

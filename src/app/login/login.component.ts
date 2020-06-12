import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection = "gl";
  option = "";
  constructor(private router : Router) { }

  ngOnInit() {
  }

  ShowForm(f) {
    this.router.navigate(['cv']);
    
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

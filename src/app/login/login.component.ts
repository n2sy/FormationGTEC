import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  defaultSection = "gl";
  option = "";
  constructor() { }

  ngOnInit() {
  }

  ShowForm(f) {
    console.log(f);
    
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

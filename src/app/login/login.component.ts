import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform =  new FormGroup({
   username : new FormControl(),
   password : new FormControl()
  }

  );

  username = '';
  password = '';
  invalidLogin = false;
  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit() {}


  checkLogin() {

    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['service']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;

      }
    )
    );
  }

}

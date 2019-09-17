import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  userName;
  userPassword;
  mouseOverLogin: boolean;

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() { }

  login(formvalues) {
    this.authService.loginUser(formvalues.userName, formvalues.userPassword);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        // Todo: checar si el usuario ya a verificado su email
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch(err) {
      console.log(err);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch(err) {
      console.log(err);
    }
  }

  private redirectUser(isVerified: Boolean): void {
    if (isVerified) {
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['verify-email'])
    }
  }
}

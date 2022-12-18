import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'vvu-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(public auth0: AuthService) { }

  login(): void {
    this.auth0.loginWithRedirect();
  }

}

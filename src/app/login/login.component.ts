import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Credentials} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private loginService: LoginService) {
  }

  login() {
    const cred = new Credentials(this.username, this.password);
    this.loginService.login(cred);
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }
}

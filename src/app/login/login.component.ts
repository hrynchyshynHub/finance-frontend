import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {Credentials} from '../models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: string;
  // password: string;

  public form: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.getLoginForm();
  }

  public login(): void {
    this.loginService.login(<Credentials>this.form.value);
  }

  private getLoginForm(): FormGroup {
    return this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl(''),
    })
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  logOff(){
    this.loginService.logoff();
  }
}

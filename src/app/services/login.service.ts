import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Credentials} from '../models/user';
import {Router} from '@angular/router';
import {constants} from '../_shared/utils/constants';

@Injectable()
export class LoginService {
  private authUrl = 'http://localhost:8888/user/auth';

  constructor(private http: HttpClient, private router: Router) {
  }

  login(user: Credentials) {
    return this.http.post<any>(this.authUrl, user, {observe: 'response'})
      .subscribe(res => {
        const token = res.headers.get(constants.HEADERS.AUTH_HEADER);
        localStorage.setItem(constants.HEADERS.AUTH_HEADER, token);
        return this.router.navigate(['/journey']);
      });
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(constants.HEADERS.AUTH_HEADER)
  }

  logoff(){
    localStorage.removeItem(constants.HEADERS.AUTH_HEADER);
  }

}

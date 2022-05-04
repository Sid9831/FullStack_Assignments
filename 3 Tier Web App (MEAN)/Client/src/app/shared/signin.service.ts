import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignIn } from './signin.model';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SignUp } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  user: SignUp;
  authToken: any;
  isloggedIn: boolean = false;

  baseURL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }


  logIn(loginData: SignIn): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseURL + '/signIn', loginData, { headers: headers })
  }

  storeUserData(user: any, token: any) {
    localStorage.setItem("user", JSON.stringify(user))
    localStorage.setItem("token", token)
    this.authToken = token;
    this.user = user
  }

  loadToken() {
    this.authToken = localStorage.getItem("token")
    this.user = JSON.parse(localStorage.getItem("user") || '{}')
  }

  loggedIn() {
    const helper = new JwtHelperService();
    this.loadToken()
    const isNotExpired = !helper.isTokenExpired(this.authToken);
    return isNotExpired;
  }

  logout() {
    this.authToken = null;

    localStorage.clear();
  }
}
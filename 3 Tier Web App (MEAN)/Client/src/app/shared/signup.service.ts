import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SignUp } from './signup.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  baseURL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  registerUser(user: SignUp): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.baseURL + '/signUp', user, { headers: headers });
  }

}

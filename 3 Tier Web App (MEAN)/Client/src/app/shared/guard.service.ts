import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(public signinService: SigninService, public router: Router) { }

  canActivate(){
    if(this.signinService.loggedIn()) {
     this.signinService.isloggedIn = true
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from '../shared/signin.service';
import { SignUp } from '../shared/signup.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public signinService: SigninService, public router: Router){if(this.signinService.loggedIn()){
    this.router.navigate(['/dashboard']);
  }}
  
  ngOnInit(): void {
    const user = localStorage.getItem("user")
    if(user){
      this.signinService.isloggedIn = true
      this.router.navigate(['/dashboard'])
    }
  }

  logOut() {
    
    this.signinService.logout();
    this.signinService.isloggedIn = false;
    this.router.navigate(['']);
   
  }

}

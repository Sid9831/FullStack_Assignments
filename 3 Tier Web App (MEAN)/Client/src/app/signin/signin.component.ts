import { Component, OnInit } from '@angular/core';
import { SignIn } from '../shared/signin.model';
import { SigninService } from '../shared/signin.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginData = new SignIn("","")

  constructor(public signInService: SigninService, public router: Router, public flashMessagesService: FlashMessagesService) {if(this.signInService.loggedIn()){
    this.router.navigate(['/dashboard'])
  }}

  onSignIn() {
    this.signInService.logIn(this.loginData)
    .subscribe((res) => {
      if(res.user){
        this.signInService.user = res.user
        this.signInService.isloggedIn = true
        this.signInService.storeUserData(res.user, res.token)
        this.flashMessagesService.show("You are now logged in", { cssClass: 'alert-success', timeout: 2500})
        this.router.navigate(['/dashboard'])
      }
    })
  }

  ngOnInit(): void {
  }

}

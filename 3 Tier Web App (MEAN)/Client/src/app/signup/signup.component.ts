import { Component, OnInit } from '@angular/core';
import { SignUp } from '../shared/signup.model';
import { SignupService } from '../shared/signup.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new SignUp("","","")

  constructor(public signUpService: SignupService, public router: Router, public flashMessagesService: FlashMessagesService) { }

  onSignUp() {
    this.signUpService.registerUser(this.user)
    .subscribe((res) => {
      console.log(res)
      if(res.user){
        this.flashMessagesService.show("User registered successfully", { cssClass: 'alert-success', timeout: 2500});
        this.router.navigate(['']);
      }
      else{
        this.flashMessagesService.show(res.data.message, { cssClass: 'red-text', timeout: 2500});
      }
    })
  }

  ngOnInit(): void {
  }

}

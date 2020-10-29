import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'
import { NgForm } from '@angular/forms';
import { AuthenticationService } from './AuthenticationService .service';
import { SignInData } from './SignInData';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  
  onSubmit(signInForm: NgForm) {
    //const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    //if(signInData.login==="user" && signInData.password=="test"){}
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationService.authenticate(signInData)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }
}



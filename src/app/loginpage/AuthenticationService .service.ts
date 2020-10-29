import { Injectable } from '@angular/core';
import { SignInData } from './SignInData';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockUser: SignInData = new SignInData('user', 'test');//username and password hardcoded
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    //  if(this.mockUser.getLogin==user" && this.mockUser.getPassword=='test'){}
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['main']);//student navbar....
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
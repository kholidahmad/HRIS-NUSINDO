import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  time: string;

  constructor() {
  }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    localStorage.clear();
  }

  getToken() {
    //let xxx = new Date(localStorage.getItem('rappstime'));
    //let yyy = new Date();
    //alert(yyy.getTime() - xxx.getTime());
    return localStorage.getItem('token');
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
      return this.getToken() != null;
    //return true;
  }
}

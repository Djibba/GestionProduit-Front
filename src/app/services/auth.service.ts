import { Injectable, OnInit } from '@angular/core';
import { User } from './../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'djibba', password: '123', roles: ['USER'] },
  ];

  public loggedUser!: string;
  public isLoggedIn!: boolean;
  public roles!: string[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn(user: User): boolean {
    let validUser: boolean = false;
    this.users.forEach((curUser) => {
      if (
        user.username === curUser.username &&
        user.password === curUser.password
      ) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isLoggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isLoggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles) {
      return false;
    }

    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isLoggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(login: string) {
    this.users.forEach((curUser) => {
      if (login === curUser.username) {
        this.roles = curUser.roles;
      }
    });
  }

  onLogout(): void {
    this.loggedUser = '';
    this.isLoggedIn = false;
    this.roles = [];
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isLoggedIn));
    this.router.navigate(['/login']);
  }
}

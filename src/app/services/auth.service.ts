import { Injectable, OnInit } from '@angular/core';
import { User } from './../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'nadhem', password: '123', roles: ['USER'] },
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
      }
    });
    return validUser;
  }
}

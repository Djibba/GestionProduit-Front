import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'client';

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    // let loggedUser = localStorage.getItem('loggedUser');
    // let isLoggedIn = localStorage.getItem('isLoggedIn');

    // if(isLoggedIn != "true" || !loggedUser){
    //   this.router.navigate(['/login']);
    // }else{
    //   this.authService.setLoggedUserFromLocalStorage(loggedUser);
    // }
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './../../model/user.model';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur = 0;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
  }

  onLoggedin() {
    console.log(this.user);

    let isValide = this.authService.signIn(this.user);

    if(isValide){
      this.router.navigate(['produits']);
    }else{
      this.erreur = 1;
    }

  }

}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginStatus$ = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginGoogle() {
    this.authService.GoogleAuth();
  }

  loginFacebook() {
    this.authService.FacebookAuth();
  }
}

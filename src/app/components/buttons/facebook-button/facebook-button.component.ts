import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-facebook-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.css'],
})
export class FacebookButtonComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  loginFacebook() {
    this.authService.FacebookAuth();
  }
}

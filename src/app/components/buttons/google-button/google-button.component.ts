import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.css'],
})
export class GoogleButtonComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginGoogle() {
    this.authService.GoogleAuth();
  }
}

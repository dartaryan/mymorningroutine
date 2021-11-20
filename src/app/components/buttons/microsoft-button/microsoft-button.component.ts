import { Component, OnInit } from '@angular/core';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-microsoft-button',
  templateUrl: './microsoft-button.component.html',
  styleUrls: ['./microsoft-button.component.css'],
})
export class MicrosoftButtonComponent implements OnInit {
  faMicrosoft = faMicrosoft;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginMicrosoft() {
    this.authService.GithubAuth();
  }
}

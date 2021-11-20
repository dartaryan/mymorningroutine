import { Component, OnInit } from '@angular/core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-google-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.css'],
})
export class GoogleButtonComponent implements OnInit {
  faGoogle = faGoogle;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginGoogle() {
    this.authService.GoogleAuth();
  }
}

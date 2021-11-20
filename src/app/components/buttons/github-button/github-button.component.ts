import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.css']
})
export class GithubButtonComponent implements OnInit {
  faGithub = faGithub;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginGithub() {
    this.authService.GithubAuth();
  }}